import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import fetch from "cross-fetch";

export const blockClient = new ApolloClient({
  link: new HttpLink({
    fetch,
    // uri: "https://api.thegraph.com/subgraphs/name/salmanbao/nightmare-blocks", // Not synced yet
    uri: "https://api.thegraph.com/subgraphs/name/decentraland/blocks-matic-mumbai",
  }),
  cache: new InMemoryCache(),
});
