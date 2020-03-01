import React, { createContext, useReducer } from 'react';
// import { deleteTransaction } from '../Actions/Transactions'
import AppReducer from './AppReducer';
 
// initial state
const initialState = {
  transactions: []
}

//create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // deleteTransaction(dispatch, id)
  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }
  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }
  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
    }}>
      {children}
    </GlobalContext.Provider>
  )
}
