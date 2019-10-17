import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Router from './router';

const host = '15.206.66.196:2021/graphql ';
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