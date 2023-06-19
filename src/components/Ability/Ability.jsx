import React from 'react';
import './Ability.css';

const Ability = (props) => {
  const classnames = ["ability"];
  if (props.className) classnames.push(props.className);

  return (
    <p className={classnames.join(" ")}>{props.children}</p>
  );
}

export default Ability;
