# Yoode 3D Kit Studio: plan

Status: draft for the owner, 2026-11-11.

Phase 0 is built in this Next.js prototype, inside the existing kit studio (`components/product/YoodeKitStudioModal.tsx`):
- `lib/studio/garment.ts`: panels of the placeholder shirt (`public/shirt_baked.glb`) in UV space and cm.
- `lib/studio/painter.ts`: paints every panel in cm (screen texture and 300 dpi print file from the same code).
- `lib/studio/kitDesign.ts`: turns the studio's colourway, logo zone and size, player name, number and font into a design.
- `components/product/KitStudio3D.tsx`: the 3D stage (React Three Fiber), shown in the modal with a 3D / Photos switch.

Still open: the real CLO3D garment (the placeholder is a crew neck, also shown for the polo), drag to place, team list, cart handoff.

## 1. Decisions

| Question | Decision | Why |
|---|---|---|
| Hydrogen or Liquid | **Stay on the Liquid theme** (`yoode-liquid-theme`) | Most of the store is already built there and merchant-editable. The studio is one component and does not need a headless store. |
| How the studio is built | **A separate studio app in plain JavaScript + three.js**, no React, no build step | Matches the theme's no-build rule. Reference (Xipid) proves this scale works in about 3,000 lines of vanilla JS. |
| Where it runs | **Inside Shopify, on our own domain**: a page template `page.kit-studio.json` with its own layout `layout/studio.liquid`, opened full screen in an iframe from the product page | Same origin as the shop, so it can call `/cart/add.js` directly. Its own layout keeps the theme's global CSS (typography, buttons) out of the studio. No extra hosting. |
| 3D models | **CLO3D garments, one GLB per garment**, stored in Shopify Files (CDN) | The flat pattern pieces of a CLO3D garment are the print panels for sublimation. |
| Prices | **Shopify owns every price**: variant price for size and fabric, a quantity-tier discount for team orders | The browser never sends a price that we trust. |
| Saved designs, logos, mockups | **A small custom Shopify app** (app proxy at `/apps/studio`) | Liquid cannot store files or JSON from a visitor. The same app carries the tier-discount Function. |

Rule exceptions the owner must approve:
- three.js is a third-party library (theme rule: none). There is no Shopify-native way to paint panels and place logos on a 3D garment.
- A custom app is added to the store.

## 2. How it fits together

```
Product page (Liquid)                     Studio page /pages/kit-studio?embed=1&product=<handle>
┌─────────────────────────┐   iframe     ┌───────────────────────────────────────────────┐
│ kit_studio block button │ ───────────▶ │ layout/studio.liquid (no theme CSS)           │
│ (sport + garment known) │              │  catalog JSON printed by Liquid (metaobjects) │
│                         │ ◀─────────── │  three.js viewer + panel canvases             │
│ cart drawer opens       │  postMessage │  steps: Shirt · Look · Colours · Logos ·      │
└─────────────────────────┘  'added'     │         Names & numbers · Text                │
                                         └──────────────┬────────────────────────────────┘
                                                        │ 1. POST design + logos + mockups
                                                        ▼
                                         App proxy /apps/studio/design  ──▶ Shopify Files + metaobject
                                                        │ 2. returns design_ref
                                                        ▼
                                         /cart/add.js  one line per size variant,
                                         properties: _design_ref, Design link, Team list
                                                        │
                                                        ▼
                                         Checkout → order → designer check → print files → Tirupur
```

## 3. The 3D side

### 3.1 Garment models (biggest cost, not code)

Each garment is made in CLO3D by a 3D garment artist and exported as:
- `<garment>.glb`, Draco-compressed, target under 1 MB. One mesh (or material) per panel: `front`, `back`, `left_sleeve`, `right_sleeve`, `collar`, plus `side_left` / `side_right` where the cut has inserts.
- `<garment>.panels.json`: each panel's real size in cm (`w`, `h`), which camera angle faces it (`view`), and its role (`front`, `back`, `sleeve`, `side`, `trim`). Trims (collar, rib cuffs) take a colour only, no artwork.
- Optional baked shading per panel (ambient occlusion PNG) for a photo-like look.

Each panel's UV island must be the flat pattern piece at true proportions. This is what makes the painted canvas a usable print file.

First garments (from the prototype's catalogue), in this order:
1. Crew-neck jersey, half sleeve (cricket, football, volleyball, badminton, kabaddi, running)
2. Performance zipper polo (the polo page's bestseller)
3. Classic 3-button polo
4. V-neck jersey
5. Sleeveless (basketball)
6. Match shorts

Later: raglan versions, full sleeve, tipped-collar polo, cycling, esports hooded.

### 3.2 Viewer (`studio-viewer.js`)

- three.js r170 copied into theme assets, loaded through an import map, only on the studio page.
- Loads the garment GLB, gives each panel mesh its own canvas texture.
- Orbit, zoom, buttons for Front / Back / Left / Right, smooth camera moves to the panel being edited.
- Click picking: a click on the shirt returns `{ panel, x_cm, y_cm }`, so logos and text can be dragged directly on the 3D garment.
- Fabric look: knit normal map that fades out at normal viewing distance, matte material, white inside (sublimation dyes one side).
- Mobile: lower pixel ratio, smaller canvases. If WebGL fails, fall back to the product's 2D images and the mockup request.

### 3.3 Panel painter (`studio-paint.js`)

One 2D canvas per panel, drawn in centimetres (scaled by pixels per cm), in this order:

1. Base colour (from the colour slots, or a per-panel override)
2. Fade (gradient)
3. Pattern
4. Look artwork (stripes, chevron, sash, ...)
5. Elements: logos, badges, club text, player name, number
6. Selection handles (screen only, never printed)

- On screen: about 16 px per cm.
- Print export: the same drawing at 300 dpi (about 118 px per cm). A 50 × 75 cm front is about 5,900 × 8,850 px. Export runs in the factory's browser, one panel at a time, not on the customer's phone.

## 4. What the customer does (6 steps)

Mapped from the prototype's tabs (Style, Look, Fabric, Colors, Logo, Player):

| Step | Contents |
|---|---|
| 0. Sport | The left arc in the prototype. Filters which garments and looks are shown. Skipped when opened from a product page (sport already known). |
| 1. Shirt | Garment cut (crew, V-neck, zipper polo, ...), sleeve length, fabric (Micro-Poly, Honeycomb Mesh, Pique Cotton, ...). |
| 2. Look | Yoode's own design templates and ready team kits, patterns, fades. |
| 3. Colours | 3 colour slots that drive the whole design, a fixed Yoode palette (dye-able colours only), combos, shuffle, per-panel override. |
| 4. Logos | Upload SVG / PNG / JPG (up to 10 MB, warn under 300 dpi), or build a simple badge. Named spots (left chest, main sponsor, back, sleeve), then free move, resize, rotate. Technique per logo where the garment allows it (print, embroidery). |
| 5. Names & numbers | Place a sample name and number once. A team list (name, number, size, qty) fills a different name and number on every shirt. CSV paste for big teams. |
| 6. Text | Club name and other lines in a fixed set of sports fonts. |

Bottom bar: price per piece at the current quantity, Add product (jersey plus shorts in one order), Share, Save, Download mockup, Ask a designer (WhatsApp with a share link), Add to cart, Request free mockup.

Everyday features:
- Undo / redo (up to 150 steps per garment).
- Autosave in the browser. Named drafts.
- Share link: the design JSON compressed into the URL. Uploaded logos are not in the link.

## 5. Design data

```json
{
  "garment": "crew-half",
  "sport": "cricket",
  "fabric": "micropoly-180",
  "design": {
    "look": "chevron",
    "slots": ["#121212", "#F2B400", "#FFFFFF"],
    "panelColor": { "collar": "#F2B400" },
    "pattern": null,
    "fade": null,
    "elements": [
      { "id": "e1", "type": "logo", "src": "asset:ab12", "panel": "front", "x": 34, "y": 19, "w": 8, "h": 8, "angle": 0, "technique": "print" },
      { "id": "e2", "type": "name", "panel": "back", "x": 25, "y": 17, "w": 26, "h": 4.5, "font": "F3", "color": "slot:2" },
      { "id": "e3", "type": "number", "panel": "back", "x": 25, "y": 38, "w": 28, "h": 24, "font": "F3", "color": "slot:2" }
    ]
  },
  "roster": [
    { "name": "ARJUN", "number": "12", "size": "Men M", "qty": 1 }
  ]
}
```

Positions are in cm on the panel, so the same design prints at the right size whatever the screen.

## 6. Catalogue in Shopify (merchant-editable)

Metaobjects, so staff edit options without a developer:

| Metaobject | Fields |
|---|---|
| `studio_garment` | name, sport list, GLB file, panels JSON, logo / name / number spots JSON, linked Shopify product, allowed fabrics, allowed logo techniques, sort order |
| `studio_look` | name, artwork definition (which slot paints what), thumbnail, sports it suits |
| `studio_team_kit` | name, look, 3 colours |
| `studio_font` | name, Google font family and weight |
| Palette | theme setting or a `studio_color` metaobject: name, hex |

`page.kit-studio.json` prints these as one JSON block for the studio script.

## 7. Products, prices and cart

### Products

- **One Shopify product per garment** (for example "Custom crew-neck jersey, half sleeve").
- Options: **Size** (`Men S` ... `Kids 34`, about 18 values) and **Fabric** (3 to 5 values). About 90 variants, well under Shopify's limit.
- Fabric upgrades are simply higher variant prices.
- Sport is not an option: it only filters looks and is stored on the line.

### Team pricing

Quantity tiers, counted across all sizes of one design (example only, prices to be set by the owner): 1–5 full price, 6–25 −15%, 26–50 −25%, 51–99 −35%, 100+ −40%.

Enforced by a **Shopify Discount Function** in the custom app, which groups cart lines by `_design_ref`. The studio shows the same tiers but never sets the price.

### Add to cart

1. The studio checks every shirt has a size. If not, a size picker opens (Men / Women / Kids tabs, + and − per size).
2. It renders front and back mockups from the 3D view.
3. It posts the design, logos and mockups to `/apps/studio/design` and gets back `design_ref`.
4. It calls `/cart/add.js` with one line per size variant:
   - `_design_ref`: the saved design
   - `Design`: link that reopens the design in the studio
   - `Sport`, `Look`, `Colours`
   - `Team list`: names and numbers for that size
5. It tells the product page (postMessage `added`), which closes the studio and opens the cart drawer (`cart.js`).

## 8. The custom app (small)

| Part | Job |
|---|---|
| App proxy `POST /apps/studio/design` | Validate the design, store logos and mockups in Shopify Files (staged uploads), store the design JSON as a `studio_design` metaobject, return `design_ref`. Rate-limited, file-type and size checks. |
| App proxy `GET /apps/studio/design/<ref>` | Return a saved design so the studio can reopen it (customer link, staff link). |
| Discount Function | Quantity tiers per design. |
| Order admin link | Opens the studio in factory mode for that order. |

Hosting: Shopify's recommended app hosting or a Cloudflare Worker. No customer data beyond the design and logos.

## 9. After the order

1. Order arrives with `_design_ref` on each line.
2. A Yoode designer opens it in **factory mode** (`/pages/kit-studio?ref=<ref>&mode=factory`): checks sizes, logo quality and positions.
3. Factory mode exports print files: one 300 dpi PNG per panel per player (names and numbers filled from the team list), plus a size sheet.
4. Files go to Tirupur for sublimation, cut and stitch.

Free-mockup route (Yoode's promise "mockup in 24 hours, pay after approval"):
- "Request free mockup" saves the design the same way but does not add to cart.
- A designer replies with a proof and a draft-order invoice; the customer pays from the invoice.

## 10. Phases

| Phase | Scope | Done when |
|---|---|---|
| 0. Groundwork | Owner approves the rule exceptions and the price tiers. Brief a CLO3D artist. First garment model with panels JSON. | One garment loads in a test page with the panel names right. |
| 1. Studio MVP | Studio page and layout, viewer, panel painter, steps 1–4 (shirt, look, colours, logos), 1 garment, 5 looks. Opens from the product page. | A customer can design a crew jersey with a logo on a phone and a laptop. |
| 2. Teams and cart | Names and numbers, team list with sizes, custom app (design save, Discount Function), add to cart, cart drawer handoff. | An order for 15 named shirts reaches checkout with the right tier price and a design link. |
| 3. Factory | Factory mode, print-file export at 300 dpi, size sheet, free-mockup route. | The factory can print one real order from the export. |
| 4. Range and polish | Remaining garments, more looks and team kits, share links, drafts, mockup download, baked shading, sport arc on the studio landing page. | All prototype garments are live. |

## 11. Risks

| Risk | Plan |
|---|---|
| Model cost and quality | Start with one garment and prove the full path (design → print) before ordering more. |
| Phones with weak GPUs | Lower texture size, cap pixel ratio, 2D fallback. Test on a mid-range Android early. |
| Low-quality logos | Warn under 300 dpi, prefer SVG, designer check before print. |
| Colour on screen vs on fabric | Limit the palette to colours the factory can dye; label it "screen preview". |
| Large uploads | 10 MB limit, compress mockups, store logos once per design. |
| Copying the reference | Use only the ideas. Our own code, models, looks, palette and copy. Nothing from Xipid's files. |

## 12. Questions for the owner

1. Approve three.js and a custom app as exceptions to the theme rules?
2. Price tiers and fabric prices per garment.
3. Which garments first, and who makes the CLO3D models?
4. Pay at checkout (designer checks before print), free mockup first, or both?
5. Which logo techniques per garment (print only, or embroidery too)?
6. Where should the studio open: product page only, or also a "Design in 3D" landing page with the sport arc?
