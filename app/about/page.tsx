import Image from 'next/image'
import { getRestaurantInfo } from '@/app/lib/data'
import { urlFor } from '@/sanity/lib/image'
import styles from './about.module.css'

export const instant = false

export default async function AboutPage() {
  const restaurant = await getRestaurantInfo()



  if (!restaurant) {
    return <main><p>Restaurant information not available.</p></main>
  }

  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <div className={styles.text}>
          <span className={styles.eyebrow}>ABOUT US</span>
          <h1>{restaurant.title}</h1>
          <p>{restaurant.description}</p>
        </div>

        {restaurant.image && (
          <div className={styles.imageContainer}>
            <Image
              src={urlFor(restaurant.image).width(900).url()}
              alt="Our restaurant"
              width={900}
              height={650}
              loading="eager"
              className={styles.image}
            />
          </div>
        )}
      </section>
    </main>
  )
}