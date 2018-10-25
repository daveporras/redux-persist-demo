import React from 'react';
import Button from '../Button/Button';

const Example = (props) => {
  return(
    <div className="container-row">
      <Button value="Change state" onClick={props.onClick} />
      <div className="content">
        <h3>{ props.heading }</h3>
        <span>The initial { props.element } value was <strong>{ `${props.state}` }</strong></span>
        <span>The actual { props.element } value is <strong>{ `${props.prop}` }</strong></span>
      </div>
    </div>
  );
};

export default Example;