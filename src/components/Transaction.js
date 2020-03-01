import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({transaction}) => {
  const sign = transaction.amount < 0 ? '-' : '+';
  const { deleteTransaction } = useContext(GlobalContext)
  return (
    <li key={'d'} className={transaction.amount < 0 ? 'minus' : 'plus'}>
          {transaction.text} <span>{sign}&#8358;{transaction.amount}</span>
          <button className="delete-btn"
          onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li>
  );
}

export default Transaction;
