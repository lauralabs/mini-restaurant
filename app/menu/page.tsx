import { getDishes, getCategories} from '@/app/lib/data'
import MenuFilter from '@/app/ui/menu-filter'

export default async function MenuPage() {
  const [categories, dishes] = await Promise.all([
    getCategories(),
    getDishes(),
  ])

  return (
    <main>
      <h1>Our Menu</h1>

      <MenuFilter categories={categories} dishes={dishes} />

      
    </main>
  )
}



