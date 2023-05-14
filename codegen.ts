require('dotenv').config()
import { CodegenConfig } from '@graphql-codegen/cli'

// E.g SHOPIFY_STORE_URL={mystore}.myshopify.com

const URL_STORE = `https://${process.env.SHOPIFY_STORE_URL}/api/graphql.json`
const ACCESS_TOKEN = `${process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN}`

const config: CodegenConfig = {
  schema: [
    {
      [URL_STORE]: {
        headers: {
          'X-Shopify-Storefront-Access-Token': ACCESS_TOKEN!,
        },
      },
    },
  ],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './result/shopify-schema.d.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
  },
}

export default config
