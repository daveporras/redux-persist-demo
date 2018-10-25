import React from 'react';
import './Button.scss';

const Button = (props) => {
  const { onClick, value } = props;
  return(
    <span className="button" onClick={onClick}>{ value }</span>
  )
}

export default Button;