import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import { getDishBySlug } from '@/app/lib/data'
import DishDetail from '@/app/ui/dish-detail'

type DishPageProps = {
  params: Promise<{ slug: string }>
}

export  async function DishContent({ params }: DishPageProps) {
  const { slug } = await params
  const dish = await getDishBySlug(slug)

  if (!dish) {
    notFound()
  }

  return <DishDetail dish={dish} />
}


export default function DishPage({ params }: DishPageProps) {
  return (
    <Suspense fallback={<p>Loading dish...</p>}>
      <DishContent params={params} />
    </Suspense>
  )
}