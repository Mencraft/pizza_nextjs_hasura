
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http:localhost:8080/v1/graphql",
  documents: "**/*.graphql",
  generates: {
    "generated/graphql.ts": {
      preset: "client",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-document-nodes",
        "urql-introspection"
      ]
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
