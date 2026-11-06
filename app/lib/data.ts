import { client } from '@/sanity/lib/client'
import { CATEGORIES_QUERY, DISHES_QUERY } from './queries'


export async function getCategories() {
    return await client.fetch(CATEGORIES_QUERY);
}

export async function getDishes() {

    return await client.fetch(DISHES_QUERY);
}

