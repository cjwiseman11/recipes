import React from 'react';

const Ingredient = ({ ingredient, Component = 'span', info, onHighlight, isHighlighted }) => {
  return (
    <Component
      onMouseEnter={() => onHighlight(ingredient)}
      onMouseLeave={() => onHighlight(null)}
      className={isHighlighted ? styles.hover : ''}
    >
      {ingredient}
      {info}
    </Component>
  );
};

export default Ingredient;
