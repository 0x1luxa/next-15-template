import Link from 'next/link'
export default function About() {
  return (
    <div>
      <h1>About</h1>
      <Link href="/">Главная</Link>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  )
}
