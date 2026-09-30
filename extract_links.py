import os
from bs4 import BeautifulSoup

with open("downloaded_page.html", "r", encoding="utf-16") as f:
    soup = BeautifulSoup(f, "html.parser")

for link in soup.find_all("link", rel="stylesheet"):
    print(link.get("href"))

for script in soup.find_all("script"):
    if script.get("src"):
        print(script.get("src"))
