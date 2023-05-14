# How to use this package

To use this package, follow these steps:

1. Clone the repository:

```sh
  git clone git@github.com:sandlerz/generate-types-for-shopify-graphql.git
```

2. Install the dependencies:

```sh
  cd generate-types-for-shopify-graphql
  yarn install
```

3. Create a .env file in the root directory of your project with the following variables:

```sh
  SHOPIFY_STORE_URL=
  SHOPIFY_STOREFRONT_ACCESS_TOKEN=
```

Replace SHOPIFY_STORE_URL with the name of your Shopify store, and SHOPIFY_STOREFRONT_ACCESS_TOKEN with your storefront access token.

4. Run the project with the following command:

```sh
  yarn gen:types
```

This will generate TypeScript types based on your Shopify GraphQL schema and save them in ./result/shopify-schema.d.ts.

# Contributing

Contributions are welcome! Please see the contributing guidelines for details.

# License

This package is licensed under the MIT License.

Feel free to adjust it as needed for your project.
