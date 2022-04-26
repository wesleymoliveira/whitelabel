import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  concat,
  split,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
});

const authLink = setContext((_, prevContext) => {
  return {
    ...prevContext,
    headers: {
      ...prevContext.headers,
    },
  };
});

const wsLink =
  typeof window === "undefined"
    ? null
    : new GraphQLWsLink(
        createClient({
          url: `${process.env.NEXT_PUBLIC_WEBSOCKET_ENDPOINT}`,
        })
      );

const link =
  typeof window === "undefined"
    ? concat(authLink, httpLink)
    : split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
          );
        },
        wsLink,
        concat(authLink, httpLink)
      );

const client = new ApolloClient({
  ssrMode: typeof window === "undefined",
  link,
  cache,
});

export default client;
