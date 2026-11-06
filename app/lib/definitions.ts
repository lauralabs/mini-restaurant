export type Dish = {
  _id: string
  name: string
  slug: {
    current: string
  }
  description?: string
  price: number
  image?: {
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  isFeatured: boolean
  isAvailable: boolean
  category: {
    _id: string
    name: string
    slug: {
      current: string
    }
  }
}