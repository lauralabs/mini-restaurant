import Image from 'next/image'
import Link from 'next/link'
import type { Dish } from '@/app/lib/definitions'
import { urlFor } from '@/sanity/lib/image'
import styles from './dish-detail.module.css'

type DishDetailProps = {
  dish: Dish
}

export default function DishDetail({ dish }: DishDetailProps) {
  return (
    <main className={styles.main}>
      <Link href="/menu" className={styles.backLink}>
        ← Back to menu
      </Link>

      <div className={styles.detail}>
        {dish.image && (
          <Image
            className={styles.image}
            src={urlFor(dish.image).width(800).height(600).url()}
            alt={dish.name}
            width={800}
            height={600}
          />
        )}

        <div>
          <span className={styles.category}>
            {dish.category?.name}
          </span>

          <h1 className={styles.title}>{dish.name}</h1>

          <p className={styles.description}>
            {dish.description}
          </p>

          <p className={styles.price}>
            {dish.price.toFixed(2)} €
          </p>

          <p className={styles.availability}>
            {dish.isAvailable ? 'Available' : 'Currently unavailable'}
          </p>
        </div>
      </div>
    </main>
  )
}