import React, { Fragment , useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
  const [transText, setTransText] = useState('');
  const [transAmount, setTransAmount] = useState(0);
  const {addTransaction} = useContext(GlobalContext);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: transText,
      amount: parseInt(transAmount, 10)
    }

    addTransaction(newTransaction);
  }
  return (
    <Fragment>
       <h3>Add new transaction</h3>
      <form onSubmit={formSubmitHandler}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text"
          value={transText} 
          onChange={(e) => setTransText(e.target.value)}
          placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input 
          type="number" 
          placeholder="Enter amount..." 
          value={transAmount} 
          onChange={(e) => setTransAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </Fragment>
  );
}

export default AddTransaction;
