import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getDishBySlug } from '@/app/lib/data'
import { urlFor } from '@/sanity/lib/image'

type DishPageProps = {
  params: Promise<{ slug: string }>
}

export default async function DishPage({ params }: DishPageProps) {
  const { slug } = await params
  const dish = await getDishBySlug(slug)

  if (!dish) {
    notFound()
  }

  return (
    <main>
      <h1>{dish.name}</h1>

      {dish.image && (
        <Image
          src={urlFor(dish.image).width(800).height(500).url()}
          alt={dish.name}
          width={800}
          height={500}
        />
      )}

      <p>{dish.description}</p>
      <p>{dish.price.toFixed(2)} €</p>
      <p>Category: {dish.category?.name}</p>
      <p>{dish.isAvailable ? 'Available' : 'Unavailable'}</p>
    </main>
  )
}