import React from 'react';
import ReactDOM from 'react-dom';

import '../index.css';

export default function Square(props) {
	
    return (
        <button className={"square"+ props.id}>
        </button>
    );
  
}