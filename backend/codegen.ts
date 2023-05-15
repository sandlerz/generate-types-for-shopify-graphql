import { CodegenConfig } from '@graphql-codegen/cli'

const url = process.env.DATA_1 || "" as string
const access_token = process.env.DATA_2 || "" as string

const date = Date.now()
const config: CodegenConfig = {
  schema: [
    {
      [url]: {
        headers: {
          'X-Shopify-Storefront-Access-Token': access_token,
        },
      },
    },
  ],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    [`./result/shopify-${date}.d.ts`]: {
      plugins: ['typescript', 'typescript-operations'],
    },
  },
}

export default config
