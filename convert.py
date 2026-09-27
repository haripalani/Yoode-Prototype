from PIL import Image
import os

images = [
    ("accessories_group.jpg", "img-accessories-group.webp"),
    ("trenz_oversized_festive.jpg", "img-trenz-oversized-festive.webp"),
    ("hoodies_sweatshirts.jpg", "img-hoodies-sweatshirts.webp")
]

for src, dst in images:
    src_path = os.path.join("/Users/hari/Desktop/Yoode/public/categories", src)
    dst_path = os.path.join("/Users/hari/Desktop/Yoode/yoode-shopify-theme/assets", dst)
    if os.path.exists(src_path):
        img = Image.open(src_path)
        img.save(dst_path, "webp")
        print(f"Converted {src} to {dst}")
    else:
        print(f"Not found: {src_path}")
