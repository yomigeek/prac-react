import React, { Component } from 'react'
import Header from './layout/NewHeader';
import '../Expense.scss';
import Balance from './Balance';
import IncomeExpenses from './IncomeExpenses';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';
// import { GlobalProvider } from '../context/GlobalState';

export default class Main extends Component {
  render() {
    return (
      <div>
          <Header />
          <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
          </div>
      </div>
    )
  }
}
