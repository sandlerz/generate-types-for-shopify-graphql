import { CodegenConfig } from '@graphql-codegen/cli'
import dotEnv from 'dotenv'
// import { info } from './globals.js'
// E.g SHOPIFY_STORE_URL={mystore}.myshopify.com

// console.log('codegen', url, access_token)


// const { url, access_token } = getCredentials()


// const access_token = "b0150d3d45d54fdd5047c1b9beda010d"
// const url = "https://9de8bb.myshopify.com/api/graphql.json"

// dotEnv.config()

const url = process.env.DATA_1 || "" as string
const access_token = process.env.DATA_2 || "" as string

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
    './result/shopify-schema.d.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
  },
}

export default config
