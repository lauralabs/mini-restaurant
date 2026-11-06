import { client } from '@/sanity/lib/client'
import { CATEGORIES_QUERY, DISHES_QUERY, FEATURED_DISHES_QUERY, DISH_BY_SLUG_QUERY } from './queries'
import { cacheLife } from 'next/cache'

export async function getCategories() {
     'use cache'
  cacheLife('minutes')
    return await client.fetch(CATEGORIES_QUERY);
}

export async function getDishes() {
     'use cache'
  cacheLife('minutes')

    return await client.fetch(DISHES_QUERY);
}


export async function getDishBySlug(slug: string) {
    'use cache'
  cacheLife('minutes')
    
  return await client.fetch(DISH_BY_SLUG_QUERY, { slug })
}

export async function getFeaturedDishes() {
     'use cache'
  cacheLife('minutes')

  return await client.fetch(FEATURED_DISHES_QUERY)
}
