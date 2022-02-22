import { GraphQLClient } from 'graphql-request'
const VITE_GRAPHQL_API = process.env['VITE_GRAPHQL_API']


export const client = new GraphQLClient(VITE_GRAPHQL_API)
