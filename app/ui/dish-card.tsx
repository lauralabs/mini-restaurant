import Image from 'next/image'
import Link from 'next/link'
import type { Dish } from '@/app/lib/definitions'
import { urlFor } from '@/sanity/lib/image'
import styles from './dish-card.module.css'

type DishCardProps = {
  dish: Dish
}

export default function DishCard({ dish }: DishCardProps) {
  return (
    <Link href={`/menu/${dish.slug.current}`}>
      <article className={styles.card}>
        {dish.image && (
          <Image
            className={styles.image}
            src={urlFor(dish.image).width(600).height(400).url()}
            alt={dish.name}
            width={600}
            height={400}
          />
        )}

        <div className={styles.content}>
          <h2 className={styles.name}>{dish.name}</h2>
          <p className={styles.description}>{dish.description}</p>
          <p className={styles.price}>{dish.price.toFixed(2)} €</p>
        </div>
      </article>
    </Link>
  )
}