export const CATEGORY_QUERY = `
query CategoryQuery {
  categories{
    name
  }
}`;

export const PRODUCTS_QUERY = `
    query GetProducts($categoryInput: String!){
        category(input: { title: $categoryInput }) {
            name
            products {
                id
                name
                brand
            }
        }
    }`
