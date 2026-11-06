import { client } from '@/sanity/lib/client'
import { CATEGORIES_QUERY, DISHES_QUERY } from './queries'


export async function getCategories() {
    return await client.fetch(CATEGORIES_QUERY);
}

export async function getDishes() {

    return await client.fetch(DISHES_QUERY);
}


import { DISH_BY_SLUG_QUERY } from './queries'

export async function getDishBySlug(slug: string) {
  return await client.fetch(DISH_BY_SLUG_QUERY, { slug })
}
