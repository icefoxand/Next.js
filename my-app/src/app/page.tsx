import Link from "next/link";
let name = "jiwon"

export default function Home() {
  return (
    <main>
      <div className="navbar">
        <Link href="/">home</Link>
        <Link href="/signup">signup page</Link>
      </div>
      <h1 className="title">The first next.js page</h1>
      <p className="title-sub">by dev {name}</p>
    </main>
  )
} 