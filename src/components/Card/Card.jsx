import React, { useState } from 'react';
import './Card.css';
import Image from '../Image/Image';
import Ability from '../Ability/Ability';
import Name from '../Name/Name';

const Card = (props) => {
  const classnames = ["card"];
  if (props.className) classnames.push(props.className);

  const [hideAbilities, setHideAbilities] = useState(true);

  const onMouseEnter = () => {
    setHideAbilities(false);
  };

  const onMouseLeave = () => {
    setHideAbilities(true);
  };

  return (
    <div className={classnames.join(" ")} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Image src={props.image} />
      <Name>{props.name}</Name>
      <div className={`abilities ${hideAbilities ? 'hideAbilities' : ''}`}>
        {props.abilities && props.abilities.map((ability, index) => (
          <Ability key={index}>{ability}</Ability>
        ))}
      </div>
    </div>
  );
}

export default Card;
