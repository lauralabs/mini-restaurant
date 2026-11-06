import Link from 'next/link'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          Mini Restaurant
        </Link>

        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </header>
  )
}