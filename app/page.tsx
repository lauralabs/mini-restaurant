import Link from 'next/link'
import { getFeaturedDishes } from '@/app/lib/data'
import DishCard from '@/app/ui/dish-card'
import styles from './home.module.css'


export default async function HomePage() {
  const featuredDishes = await getFeaturedDishes()

  return (
    <main>
      <section className={styles.hero}>
        <span className={styles.eyebrow}>WELCOME TO MINI RESTAURANT</span>

        <h1 className={styles.title}>
          Simple ingredients. Extraordinary flavors.
        </h1>

        <p className={styles.description}>
          Discover our passion for Italian cuisine, made with
          fresh ingredients and traditional recipes.
        </p>

        <Link href="/menu" className={styles.button}>
          Explore our menu
        </Link>
      </section>

      <section className={styles.featured}>
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.eyebrow}>OUR FAVORITES</span>
            <h2>Featured dishes</h2>
          </div>

          <Link href="/menu" className={styles.menuLink}>
            View full menu →
          </Link>
        </div>

        <div className={styles.grid}>
          {featuredDishes.map((dish) => (
            <DishCard key={dish._id} dish={dish} />
          ))}
        </div>
      </section>
    </main>
  )
}