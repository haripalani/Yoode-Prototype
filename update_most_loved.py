import re

with open('/Users/hari/Desktop/Yoode/yoode-shopify-theme/sections/most-loved.liquid', 'r') as f:
    content = f.read()

# Replace the dynamic product card block
dynamic_block_regex = r'<div class="ml-card-wrapper">.*?<div class="ml-rank-badge">.*?#\{\{\s*forloop\.index\s*\}\}.*?</div>.*?<div class="ml-card-inner-wrapper">.*?</a>.*?</div>.*?</div>'

replacement_dynamic = """{% render 'product-card', product: product, class: 'ml-card-wrapper', show_index: true, index: forloop.index %}"""

content = re.sub(dynamic_block_regex, replacement_dynamic, content, flags=re.DOTALL)

# Replace the mockup product card block
mockup_block_regex = r'<div class="ml-card-wrapper">\s*<!-- Rank Badge -->\s*<div class="ml-rank-badge">\s*#\{\{\s*forloop\.index\s*\}\}\s*</div>\s*<div class="ml-card-inner-wrapper">.*?</a>\s*</div>\s*</div>'

replacement_mockup = """{% assign show_sizes_mockup = false %}
          {% if i < 3 %}
            {% assign show_sizes_mockup = true %}
          {% endif %}
          {% render 'product-card', 
            class: 'ml-card-wrapper', 
            show_index: true, 
            index: forloop.index,
            title: mockup_products[i],
            price: mockup_prices[i],
            original_price: mockup_original[i],
            discount: mockup_discount[i],
            variant_text: mockup_variant[i],
            image: mockup_images[i],
            show_sizes_mockup: show_sizes_mockup
          %}"""

content = re.sub(mockup_block_regex, replacement_mockup, content, flags=re.DOTALL)

with open('/Users/hari/Desktop/Yoode/yoode-shopify-theme/sections/most-loved.liquid', 'w') as f:
    f.write(content)
