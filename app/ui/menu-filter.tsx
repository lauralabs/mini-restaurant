'use client'

import { useState } from 'react'
import type { Category, Dish } from '@/app/lib/definitions'
import DishCard from './dish-card'
import styles from './menu-filter.module.css'
console.log('CSS Modules:', styles)
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
      <div  className={styles.filters}>
        <button
          type="button"
          className={`${styles.button} ${
            selectedCategory === 'all' ? styles.active : ''
          }`}
          onClick={() => setSelectedCategory('all')}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            key={category._id}
            type="button"
            className={`${styles.button} ${
              selectedCategory === category._id ? styles.active : ''
            }`}
            onClick={() => setSelectedCategory(category._id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredDishes.map((dish) => (
          <DishCard key={dish._id} dish={dish} />
        ))}
      </div>
    </section>
  )
}
