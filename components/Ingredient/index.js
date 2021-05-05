import React from 'react';
import styles from '../../styles/Home.module.css';

const Ingredient = ({
  ingredient,
  Component = 'span',
  info,
  onHighlight,
  isHighlighted,
  onClick,
}) => {
  return (
    <Component
      onMouseEnter={() => onHighlight(ingredient)}
      onMouseLeave={() => onHighlight(null)}
      onClick={onClick}
      className={`${styles.ingredient} ${isHighlighted ? styles.hover : ''}`}
    >
      {ingredient}
      {info}
    </Component>
  );
};

export default Ingredient;
