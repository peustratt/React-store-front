export const CATEGORY_QUERY = `
query CategoryQuery {
  categories{
    name
  }
}`;

export const CURRENCIES_QUERY = `
query GetCurrencies {
  category {
    products {
      prices {
        currency {
          label
        }
      }
    }
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
