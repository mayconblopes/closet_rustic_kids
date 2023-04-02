import { CATEGORIES_ACTION_TYPES } from './category.types'

export function setCategories(categoriesArray) {
  return {
    type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
    payload: categoriesArray,
  }
}
