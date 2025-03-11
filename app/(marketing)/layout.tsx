import Counter from '@/components/Counter'
import Link from 'next/link'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="marketing-layout flex min-h-screen flex-col">
      <Counter />
      <header className="bg-blue-500 p-4 text-white">
        <nav className="container mx-auto flex justify-between">
          <h1 className="text-xl font-bold">Наш продукт</h1>
          <div className="flex gap-4">
            <Link href="/" className="hover:underline">
              Главная
            </Link>
            <Link href="/about" className="hover:underline">
              О нас
            </Link>
            <Link href="/contact" className="hover:underline">
              Контакты
            </Link>
          </div>
        </nav>
      </header>
      <main className="container mx-auto flex-1 py-8">
        {children}
      </main>
      <footer className="mt-auto bg-gray-100 p-4 text-center">
        <p>© 2024 Маркетинговый раздел</p>
      </footer>
    </div>
  )
}
