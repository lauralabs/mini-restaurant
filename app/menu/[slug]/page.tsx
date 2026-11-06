import { notFound } from 'next/navigation'
import { getDishBySlug } from '@/app/lib/data'
import DishDetail from '@/app/ui/dish-detail'

type DishPageProps = {
  params: Promise<{ slug: string }>
}

export default async function DishPage({ params }: DishPageProps) {
  const { slug } = await params
  const dish = await getDishBySlug(slug)

  if (!dish) {
    notFound()
  }

  return <DishDetail dish={dish} />
}