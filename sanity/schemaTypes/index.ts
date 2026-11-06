import { type SchemaTypeDefinition } from 'sanity'
import {categoryType} from './category'
import {dishType} from './dish'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, dishType],
}
