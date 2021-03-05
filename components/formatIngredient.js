const measurementMap = {
  tablespoon: {
    uk: {
      multiplier: 1,
      value: 'tablespoon',
    },
    us: {
      multiplier: 1.2,
      value: 'tablespoon',
    },
  },
  teaspoon: {
    uk: {
      multiplier: 1,
      value: 'teaspoon',
    },
    us: {
      multiplier: 1.2,
      value: 'teaspoon',
    },
  },
  g: {
    uk: {
      multiplier: 1,
      value: 'g',
    },
    us: {
      multiplier: 0.035,
      value: 'oz',
    },
  },
};

const pluralise = (amount, measurement) => {
  if (['g'].includes(measurement)) return '';
  return amount > 1 ? 's' : '';
};

const formatIngredient = (amount, measurement, ingredient, type) => {
  const { multiplier, value } = measurementMap[measurement][type];
  const ingredientAmount = Math.floor(amount * multiplier);

  return `${ingredientAmount} ${value}${pluralise(ingredientAmount, measurement)} of ${ingredient}`;
};

export default formatIngredient;
