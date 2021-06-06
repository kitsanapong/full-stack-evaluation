import React from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import SearchPage from './containers/SearchPage'
import SearchText from './providers/searchText'
import './styleGlobal.css'
import './App.css';


const client = new ApolloClient({
  uri: 'https://graphql-pokemon2.vercel.app',
  cache: new InMemoryCache()
});

function App() {
  return (
    <div className="app flex flex-column align-center">
      <ApolloProvider client={client}>
        <SearchText.Provider>
          <SearchPage/>
        </SearchText.Provider>
      </ApolloProvider>
    </div>
  );
}

export default App;
