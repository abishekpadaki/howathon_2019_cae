import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Router from './router';

const host = 'http://13.126.132.35:2021/graphql';
const httpLink = new HttpLink({
  uri: host
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache
});




const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
};

export default App;