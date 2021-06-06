import React from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import SearchPage from './containers/SearchPage'
import './App.css';

const client = new ApolloClient({
  uri: 'https://graphql-pokemon2.vercel.app',
  cache: new InMemoryCache()
});

function App() {
  return (
    <div className="app">
      <ApolloProvider client={client}>
        <SearchPage/>
      </ApolloProvider>
    </div>
  );
}

export default App;
