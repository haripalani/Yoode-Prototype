export function generateStaticParams() {
  return [
    { category: 't-shirts' },
    { category: 'custom-sports-jerseys' },
    { category: 'polos' },
    { category: 'stationery-gifting-drinkware' },
    { category: 'accessories' },
    { category: 'trenz' },
    { category: 'hoodies-sweatshirts-jackets' }
  ];
}

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
