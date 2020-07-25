import React from 'react';
import {ApolloProvider} from "react-apollo";
import client from './components/apolloClient';
import './App.css';
import GetData from './components/GetData';
import DataStore from './components/DataStore';

function App() {
  
  return (
    <DataStore>
      <ApolloProvider client={client}>
        <div>Client</div>
          <GetData/>
      </ApolloProvider>
    </DataStore>
  );
}

export default App;
