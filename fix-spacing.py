import re

with open('app/custom-cricket-jerseys/page.tsx', 'r') as f:
    content = f.read()

# 1. Wrapper
content = content.replace(
    'className="relative flex-1 w-full flex items-center justify-center pt-20"',
    'className="relative flex-1 w-full flex items-center justify-center py-20 lg:py-24"'
)

# 2. Container
content = content.replace(
    'className="relative z-20 w-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center h-full gap-8 md:gap-4 pb-0 pt-10"',
    'className="relative z-20 w-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center h-full gap-8 md:gap-4"'
)

# 3. Left Content
content = content.replace(
    'className="w-full md:w-[60%] lg:w-[60%] xl:w-[55%] flex flex-col items-start justify-center z-30 pt-10 pb-10 md:pb-16 pr-0 md:pr-4"',
    'className="w-full md:w-[60%] lg:w-[60%] xl:w-[55%] flex flex-col items-start justify-center z-30 pr-0 md:pr-4 py-8 lg:py-12"'
)

with open('app/custom-cricket-jerseys/page.tsx', 'w') as f:
    f.write(content)

