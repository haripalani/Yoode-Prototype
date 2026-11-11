// Makes the kit studio's lighter copy of the placeholder shirt:
//   public/shirt_baked.glb -> public/studio/shirt.glb
// It drops the baked shadow (occlusion) texture, which the studio never uses, and shrinks the knit
// normal map to 512 px. The map repeats 8 times across the shirt, so it looks the same at half size.
//
// Run: node scripts/slim-studio-model.mjs
import fs from "node:fs";
import sharp from "sharp";

const SRC = "public/shirt_baked.glb";
const OUT = "public/studio/shirt.glb";

const glb = fs.readFileSync(SRC);
const jsonLen = glb.readUInt32LE(12);
const json = JSON.parse(glb.subarray(20, 20 + jsonLen).toString("utf8"));
const bin = glb.subarray(20 + jsonLen + 8);
const view = i => {
  const v = json.bufferViews[i];
  return bin.subarray(v.byteOffset ?? 0, (v.byteOffset ?? 0) + v.byteLength);
};

// 1. Drop the occlusion texture and its image.
const mat = json.materials[0];
const aoTexture = mat.occlusionTexture?.index;
delete mat.occlusionTexture;
const aoImage = aoTexture !== undefined ? json.textures[aoTexture].source : undefined;

// 2. Shrink the normal map.
const normalImage = json.textures[mat.normalTexture.index].source;
const smaller = await sharp(view(json.images[normalImage].bufferView)).resize(512, 512).jpeg({ quality: 88, mozjpeg: true }).toBuffer();

// 3. Repack every buffer view that is still used, 4-byte aligned.
const keepImages = json.images.map((img, i) => (i === aoImage ? null : img));
const usedViews = new Set([...json.accessors.map(a => a.bufferView), ...keepImages.filter(Boolean).map(i => i.bufferView)]);
const remap = new Map();
const chunks = [];
let offset = 0;
json.bufferViews.forEach((v, i) => {
  if (!usedViews.has(i)) return;
  const data = json.images[normalImage].bufferView === i ? smaller : view(i);
  const pad = (4 - (data.length % 4)) % 4;
  remap.set(i, { ...v, byteOffset: offset, byteLength: data.length });
  chunks.push(data, Buffer.alloc(pad));
  offset += data.length + pad;
});
const order = [...remap.keys()];
json.bufferViews = order.map(i => remap.get(i));
const newIndex = i => order.indexOf(i);
json.accessors.forEach(a => { a.bufferView = newIndex(a.bufferView); });

// Images and textures without the occlusion one.
const imageIndex = new Map();
json.images = json.images.filter((img, i) => {
  if (i === aoImage) return false;
  imageIndex.set(i, imageIndex.size);
  img.bufferView = newIndex(img.bufferView);
  return true;
});
json.textures = json.textures.filter((_, i) => i !== aoTexture).map(t => ({ ...t, source: imageIndex.get(t.source) }));
mat.normalTexture.index = json.textures.findIndex(t => t.source === imageIndex.get(normalImage));
json.buffers = [{ byteLength: offset }];

// 4. Write the GLB: header, JSON chunk (space-padded), BIN chunk.
let jsonBuf = Buffer.from(JSON.stringify(json), "utf8");
jsonBuf = Buffer.concat([jsonBuf, Buffer.alloc((4 - (jsonBuf.length % 4)) % 4, 0x20)]);
const binBuf = Buffer.concat(chunks);
const header = Buffer.alloc(12);
header.writeUInt32LE(0x46546c67, 0);
header.writeUInt32LE(2, 4);
header.writeUInt32LE(12 + 8 + jsonBuf.length + 8 + binBuf.length, 8);
const chunk = (type, data) => {
  const h = Buffer.alloc(8);
  h.writeUInt32LE(data.length, 0);
  h.writeUInt32LE(type, 4);
  return Buffer.concat([h, data]);
};
fs.mkdirSync("public/studio", { recursive: true });
fs.writeFileSync(OUT, Buffer.concat([header, chunk(0x4e4f534a, jsonBuf), chunk(0x004e4942, binBuf)]));
console.log(`${SRC} ${Math.round(glb.length / 1024)} KB -> ${OUT} ${Math.round(fs.statSync(OUT).size / 1024)} KB`);
