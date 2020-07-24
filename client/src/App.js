import React from 'react';
import {ApolloProvider} from "react-apollo";
import client from './components/apolloClient';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <ApolloProvider client={client}>
      <div>Client</div>
      <Home/>
    </ApolloProvider>
  );
}

export default App;
