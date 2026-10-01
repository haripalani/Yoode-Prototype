import re

with open('app/custom-cricket-jerseys/page.tsx', 'r') as f:
    content = f.read()

# Add import
if "import { CustomJerseysCustomise }" not in content:
    content = content.replace("import { CustomJerseysCtaLight } from '@/components/CustomJerseysCtaLight';", 
                              "import { CustomJerseysCtaLight } from '@/components/CustomJerseysCtaLight';\nimport { CustomJerseysCustomise } from '@/components/CustomJerseysCustomise';")

new_section = """          {/* 5. Customisation Details (Tech Pack) */}
          <CustomJerseysCustomise 
            title="CRICKET KITS - CUSTOMISATION DETAILS" 
            subHeading="Our Process" 
            heading="Custom Cricket jerseys & training wear" 
          />"""

old_section_pattern = re.compile(r'\{\/\*\s*5\.\s*Intro Text \(Styled as Premium Bento\)\s*\*\/\}.*?</section>', re.DOTALL)
content = old_section_pattern.sub(new_section, content)

with open('app/custom-cricket-jerseys/page.tsx', 'w') as f:
    f.write(content)

