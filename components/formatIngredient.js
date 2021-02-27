const measurementMap = {
  tablespoon: {
    uk: {
      multiplier: 1,
      value: 'tablespoon',
    },
    us: {
      multiplier: 1.2,
      value: 'tablespoon',
    }
  },
  teaspoon: {
    uk: {
      multiplier: 1,
      value: 'teaspoon',
    },
    us: {
      multiplier: 1.2,
      value: 'teaspoon',
    }
  }
}

const formatIngredient = (amount, measurement, ingredient, type) => {
  const {multiplier, value} = measurementMap[measurement][type];
  const ingredientAmount = amount * multiplier;

  return `${ingredientAmount} ${value}${Math.floor(ingredientAmount) > 1 ? 's' : ''} of ${ingredient}`
}

export default formatIngredient;