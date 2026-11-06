import { type SchemaTypeDefinition } from 'sanity'
import {categoryType} from './category'
import {dishType} from './dish'
import { restaurantInfoType } from './restaurantInfo' 

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, dishType, restaurantInfoType],
}
