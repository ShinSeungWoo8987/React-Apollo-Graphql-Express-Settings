import React, { useReducer } from 'react';
import Store from './store'
import dataReducer from './dataReducer';

function DataStore(props) {
  const [data,dataDispatch] = useReducer(dataReducer,{});
  console.log(data);
  return (
    <Store.Provider value={{data,dataDispatch}}>
        {props.children}
    </Store.Provider>
  );
}

export default DataStore;
