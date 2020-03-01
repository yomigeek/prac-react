import React, { Fragment, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce(((bal, num) => bal + num), 0).toFixed(2);;

  return (
    <Fragment>
      <h4>Your Balance</h4>
      <h1>&#8358;{total}</h1>
    </Fragment>
  );
}

export default Balance;
