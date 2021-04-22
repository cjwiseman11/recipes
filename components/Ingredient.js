import React, { useState } from 'react';
import styles from '../styles/Home.module.css';

const Ingredient = ({ ingredient, Component = 'span', info, onHighlight, isHighlighted }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <Component
      onMouseEnter={() => !clicked && onHighlight(ingredient)}
      onMouseLeave={() => !clicked && onHighlight(null)}
      onClick={() => setClicked(!clicked)}
      className={isHighlighted || clicked ? styles.hover : ''}
    >
      {ingredient}
      {info}
    </Component>
  );
};

export default Ingredient;
