import { ApolloClient, createNetworkInterface } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const apolloClient = new ApolloClient({
    // By default, this client will send queries to the
    //  `/graphql` endpoint on the same host
    // Pass the configuration option { uri: YOUR_GRAPHQL_API_URL } to the `HttpLink` to connect
    // to a different host
    link: new HttpLink({
        uri: "http://localhost:4000/graphql"
    }),
    cache: new InMemoryCache()
});

export default apolloClient;
