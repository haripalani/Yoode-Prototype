import os
from bs4 import BeautifulSoup

with open("downloaded_page.html", "r", encoding="utf-16") as f:
    soup = BeautifulSoup(f, "html.parser")

styles = []
for style in soup.find_all("style"):
    if ".yd-seo" in style.text:
        styles.append(style.text)

scripts = []
for script in soup.find_all("script"):
    if script.text and "yd-seo" in script.text:
        scripts.append(script.text)

with open("extracted_styles.css", "w", encoding="utf-8") as f:
    f.write("\n".join(styles))

with open("extracted_scripts.js", "w", encoding="utf-8") as f:
    f.write("\n".join(scripts))
