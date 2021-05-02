const measurementMap = {
  tablespoon: {
    UK: {
      multiplier: 1,
      value: 'tablespoon',
    },
    US: {
      multiplier: 1.2,
      value: 'tablespoon',
    },
  },
  teaspoon: {
    UK: {
      multiplier: 1,
      value: 'teaspoon',
    },
    US: {
      multiplier: 1.2,
      value: 'teaspoon',
    },
  },
  g: {
    UK: {
      multiplier: 1,
      value: 'g',
    },
    US: {
      multiplier: 0.035,
      value: 'oz',
    },
  },
  whole: {
    UK: {
      multiplier: 1,
      value: '',
    },
    US: {
      multiplier: 1,
      value: '',
    },
  },
};

const pluralise = (amount, measurement) => {
  if (['g', 'whole'].includes(measurement)) return '';
  return amount > 1 ? 's' : '';
};

const formatIngredient = (amount, measurement, ingredient, type) => {
  const { multiplier, value } = measurementMap[measurement][type];
  const ingredientAmount = measurement === 'whole' ? amount : Math.floor(amount * multiplier);

  return `${ingredientAmount} ${value}${pluralise(ingredientAmount, measurement)} ${
    measurement === 'whole' ? '' : `of`
  } ${ingredient}`;
};

export default formatIngredient;
