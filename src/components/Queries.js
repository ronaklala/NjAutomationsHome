export const GetProductsQuery = `
    query {
        products {
            price
            _id
            name
            disc_price
            image
        }
    }
`;

export const GetOrdersQuery = `
query($getSingleUserOrdersId: ID!) {
    getSingleUserOrders(id: $getSingleUserOrdersId) {
      name
      address
      phno
      city
      state
      zip
      uid
      qty
      pid
      status
      razorpay_id
      tracking_id
      _id
      productDetails {
        _id
        name
        image
        price
        disc_price
      }
      updatedAt
      createdAt
    }
  }
`;

export const GetSingleProductQuery = `

query GetSingleProduct($getSingleProductId: ID!) {
    getSingleProduct(id: $getSingleProductId) {
      product {
        _id
        name
        image
        qty
        description
        price
        disc_price
        offerQty
        offerDisc
        detail
        categoryId
        additionalData {
          p1
          p2
          p3
          p4
          p5
          p6
        }
      }
      relatedProducts {
        _id
        name
        price
        disc_price
        image
      }
    }
  }

`;

export const GetCategoriesQuery = `query {
    getCategories {
      name
      image
      isActive
      _id
    }
  }`;

export const GetProductsInCategoryQuery = `
  query GetProductByCategory($categoryId: ID!) {
    getProductByCategory(categoryId: $categoryId) {
      _id
      name
      image
      qty
      description
      price
      disc_price
      offerQty
      offerDisc
      detail
      categoryId
    }
  }`;
