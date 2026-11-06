'use client'

import { useState } from 'react'
import type { Category, Dish } from '@/app/lib/definitions'
import DishCard from './dish-card'

type MenuFilterProps = {
  categories: Category[]
  dishes: Dish[]
}

export default function MenuFilter({
  categories,
  dishes,
}: MenuFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredDishes =
    selectedCategory === 'all'
      ? dishes
      : dishes.filter(
          (dish) => dish.category?._id === selectedCategory
        )

  return (
    <section>
      <div>
        <button
          type="button"
          onClick={() => setSelectedCategory('all')}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            key={category._id}
            type="button"
            onClick={() => setSelectedCategory(category._id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div>
        {filteredDishes.map((dish) => (
          <DishCard key={dish._id} dish={dish} />
        ))}
      </div>
    </section>
  )
}
