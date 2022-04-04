import React from "react"
import fetch from "cross-fetch"
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client"

const customFetch = (uri, options) => {
  return fetch(uri, options).then(response => {
    if (response.status >= 500) {
      // or handle 400 errors
      return Promise.reject(response.status)
    }
    return response
  })
}

const client = new ApolloClient({
  link: new HttpLink({
    uri: `http://localhost:1337/graphql`,
    fetch: customFetch,
  }),
  cache: new InMemoryCache(),
})

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)
