import os
from bs4 import BeautifulSoup
import json

with open("c:\\Users\\Hari\\Desktop\\Yoode-Prototype\\downloaded_page.html", "r", encoding="utf-16") as f:
    soup = BeautifulSoup(f, "html.parser")

# Find the main content
main_content = soup.find("main")
if not main_content:
    main_content = soup.body

# Extract images
images = []
for img in main_content.find_all("img"):
    src = img.get("src") or img.get("data-src") or img.get("srcset")
    if src:
        # If srcset, just take the first URL
        if "," in src:
            src = src.split(",")[0].strip().split(" ")[0]
        if src.startswith("//"):
            src = "https:" + src
        elif src.startswith("/"):
            src = "https://yoode.com" + src
        images.append({
            "src": src,
            "alt": img.get("alt", "")
        })

# Extract structure (headings and text)
elements = []
for tag in main_content.find_all(["h1", "h2", "h3", "h4", "p", "a"]):
    text = tag.get_text(strip=True)
    if text:
        elements.append({
            "type": tag.name,
            "text": text
        })

output = {
    "images": images,
    "content": elements
}

with open("c:\\Users\\Hari\\Desktop\\Yoode-Prototype\\extracted_data.json", "w", encoding="utf-8") as f:
    json.dump(output, f, indent=2)

print(f"Extracted {len(images)} images and {len(elements)} content elements.")
