import React from 'react';
import './Image.css';

const Image = (props) => {
  const classnames = ["image"];
  if (props.className) classnames.push(props.className);

  const imagePath = "src/assets/";

  return (
    <img src={imagePath.concat(props.src)} className={classnames.join(" ")} alt="pokemon" />
  )
}

export default Image;
