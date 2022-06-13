export const CATEGORY_QUERY = `
query GetCategories {
  categories{
    name
  }
}`;

export const CURRENCIES_QUERY = `
query GetCurrencies {
  currencies {
    label
    symbol
  }
}
`

export const PRODUCTS_QUERY = `
    query GetProducts($categoryInput: String!){
        category(input: { title: $categoryInput }) {
            name
            products{
              id
              name
              inStock
              gallery
              description
              category
              attributes {
                id
                name
                type
                items {
                  displayValue
                  value
                  id
                }
              }
              prices {
                currency {
                  label
                  symbol
                }
                amount
              }
              brand
            }
        }
    }`

export const PRODUCT_QUERY = `
  query GetProduct($productId: String!) {
    product(id: $productId) {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      brand
    }
  }
`