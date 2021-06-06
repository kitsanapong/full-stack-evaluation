import React from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import './App.css';

const client = new ApolloClient({
  uri: 'https://graphql-pokemon2.vercel.app',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      App
    </ApolloProvider>
  );
}

export default App;
