import { createSelector } from 'reselect'

function selectCategoryReducer(state){
  return state.categories
}

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
)

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    categories.reduce((acc, category) => {
      const { title, items } = category
      acc[title.toLowerCase()] = items
      return acc
    }, {})
  }
)

// export function selectCateforiesMap(state) {
//   return state.categories.categories.reduce((accumulator, category) => {
//     const { title, items } = category
//     accumulator[title.toLowerCase()] = items
//     return accumulator
//   }, {})
// }
