import React from 'react';
import './Name.css';

const Name = (props) => {
  const classnames = ["name"];
  if (props.className) classnames.push(props.className);

  return (
    <div>
      <span className={classnames.join(" ")}>{props.children}</span>
    </div>
  );
}

export default Name;
