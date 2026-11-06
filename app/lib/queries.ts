import { defineQuery } from 'next-sanity'

export const CATEGORIES_QUERY = defineQuery(`
  *[_type == "category"] | order(order asc) {
    _id,
    name,
    slug,
    description,
    order
  }
`)

export const DISHES_QUERY = defineQuery(`
  *[_type == "dish"] {
    _id,
    name,
    slug,
    description,
    price,
    image,
    isFeatured,
    isAvailable,
    category->{
      _id,
      name,
      slug
    }
  }
`)

export const DISH_BY_SLUG_QUERY = defineQuery(`
  *[_type == "dish" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    description,
    price,
    image,
    isFeatured,
    isAvailable,
    category->{
      _id,
      name,
      slug
    }
  }
`)
export const FEATURED_DISHES_QUERY = defineQuery(`
  *[_type == "dish" && isFeatured == true && isAvailable == true] {
    _id,
    name,
    slug,
    description,
    price,
    image,
    isFeatured,
    isAvailable,
    category->{
      _id,
      name,
      slug
    }
  }
`)