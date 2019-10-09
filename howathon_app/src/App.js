import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Router from './router';

const host = 'http://10.150.16.118:3490/graphql';
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
      <Router/>      
    </ApolloProvider>
  );
};

export default App;