import { getDishes, getCategories} from '@/app/lib/data'
import MenuFilter from '@/app/ui/menu-filter'
import styles from './menu.module.css'

export default async function MenuPage() {
  const [categories, dishes] = await Promise.all([
    getCategories(),
    getDishes(),
  ])

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Our Menu</h1>
      <p className={styles.subtitle}>
        Fresh ingredients, simple recipes, unforgettable flavors.
      </p>

      <MenuFilter categories={categories} dishes={dishes} />

      
    </main>
  )
}



