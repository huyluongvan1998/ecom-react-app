import { useSelector } from "react-redux"
import { ProductsSelector } from "../../store/modules/product/selector"

export const SearchListHelper = (type) => {
  const products = useSelector(ProductsSelector)
  let categoryType = new Set(["All"])
  switch (type) {
    case "category":
      products.map((prod) => categoryType.add(prod.category))
      return categoryType
    case "company":
      products.map((prod) => categoryType.add(prod.company))
      return categoryType
    case "color":
      products.map((prod) => prod.colors.map((c) => categoryType.add(c)))
      return categoryType
    default:
      break
  }
}

//Category List

//CategoryList
