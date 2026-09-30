import os
from bs4 import BeautifulSoup

with open("downloaded_page.html", "r", encoding="utf-16") as f:
    soup = BeautifulSoup(f, "html.parser")

for tag in soup.find_all(string=lambda text: "SHOP CUSTOM JERSEYS BY SPORT" in text.upper()):
    parent = tag.parent
    while parent and parent.name != "section" and "shopify-section" not in parent.get("class", []):
        parent = parent.parent
    if parent:
        with open("extracted_section.html", "w", encoding="utf-8") as out_f:
            out_f.write(parent.prettify())
        break
