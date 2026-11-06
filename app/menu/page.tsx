import { getDishes } from '@/app/lib/data'
import DishCard from '@/app/ui/dish-card'

export default async function MenuPage() {
  const dishes = await getDishes()

  return (
    <main>
      <h1>Our Menu</h1>

      <div>
        {dishes.map((dish) => (
          <DishCard key={dish._id} dish={dish} />
        ))}
      </div>
    </main>
  )
}



