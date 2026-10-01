import re

with open('app/custom-cricket-jerseys/page.tsx', 'r') as f:
    content = f.read()

# Make sure it's imported (we know it is imported, but let's check)
if "import { CustomJerseysBulkOrders }" not in content:
    content = content.replace("import { CustomJerseysHowItWorks } from '@/components/CustomJerseysHowItWorks';", 
                              "import { CustomJerseysHowItWorks } from '@/components/CustomJerseysHowItWorks';\nimport { CustomJerseysBulkOrders } from '@/components/CustomJerseysBulkOrders';")

new_section = """          {/* 8. Kitting a whole team? (Bulk Orders) - Now using standard component */}
          <CustomJerseysBulkOrders />"""

old_section_pattern = re.compile(r'\{\/\*\s*8\.\s*Kitting a whole team.*?\}\s*</section>', re.DOTALL)
content = old_section_pattern.sub(new_section, content)

with open('app/custom-cricket-jerseys/page.tsx', 'w') as f:
    f.write(content)

