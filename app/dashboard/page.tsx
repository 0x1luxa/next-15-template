import Counter from '@/components/Counter'
import Link from 'next/link'
export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Counter />
      <Link href="/">Главная</Link>
      <Link href="/about">О нас</Link>
    </div>
  )
}
