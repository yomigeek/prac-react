import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header style={headerStyle}>
        <h1 className="list-text">Todo List</h1>
        <Link to="/" style={linkStyle}> Home</Link> | 
        <Link to="/about" style={linkStyle}> About</Link>
      </header>
    </div>
  );
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',

}

export default Header;
