import {
  CATEGORIES_ACTION_TYPES,
  Category,
  CategoryItem,
} from './category.types'

import {
  createAction,
  Action,
  ActionWithPayload,
} from '../../utils/reducer/reducer.utils'

export type FecthCategoriesStart =
  Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>
export type FecthCategoriesSuccess = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  Category[]
>
export type FecthCategoriesFailed = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  Error
>

export type CategoryAction =
  | FecthCategoriesStart
  | FecthCategoriesSuccess
  | FecthCategoriesFailed

export const fetchCategoriesStart = (): FecthCategoriesStart =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)

export const fetchCategoriesSuccess = (
  categoriesArray: Category[]
): FecthCategoriesSuccess =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  )

export const fetchCategoriesFailed = (error: Error): FecthCategoriesFailed =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)
