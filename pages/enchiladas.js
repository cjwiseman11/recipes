import { useState } from 'react';
import styles from '../styles/Home.module.css';

import PageContainer from '../components/pageContainer';
import formatIngredient from '../components/formatIngredient';
import Ingredient from '../components/Ingredient';

import {
  flour,
  chilliPowder,
  cumin,
  oregano,
  garlicSalt,
  oliveOil,
  choppedTomatoes,
  ciderVinegar,
  cauliflower,
  redPepper,
  vegetableStock,
} from '../components/constants/ingredients';

const Enchiladas = ({ settings }) => {
  const { measurement } = settings;
  const [ingredient, setIngredient] = useState(null);

  const ingredients = {
    [flour]: formatIngredient(3, 'tablespoon', 'Flour', measurement),
    [chilliPowder]: formatIngredient(1, 'tablespoon', 'Chilli Powder', measurement),
    [cumin]: formatIngredient(1, 'tablespoon', 'Cumin', measurement),
    [oregano]: formatIngredient(1, 'teaspoon', 'Oregano', measurement),
    [garlicSalt]: formatIngredient(1, 'teaspoon', 'Garlic Salt', measurement),
    [oliveOil]: formatIngredient(3, 'tablespoon', 'Olive Oil', measurement),
    [choppedTomatoes]: formatIngredient(400, 'g', 'Chopped Tomatoes', measurement),
    [ciderVinegar]: formatIngredient(1, 'teaspoon', 'cider vinegar', measurement),
    [cauliflower]: formatIngredient(0.5, 'whole', 'Cabbage', measurement),
    [redPepper]: formatIngredient(1, 'whole', 'Red Pepper', measurement),
    [vegetableStock]: formatIngredient(1, 'whole', 'Vegetable stock cube', measurement),
  };

  const getIngredient = (ingredientId, component = 'span', info) => {
    return (
      <Ingredient
        isHighlighted={ingredients[ingredientId] === ingredient}
        Component={component}
        info={info}
        ingredient={ingredients[ingredientId]}
        onHighlight={setIngredient}
      />
    );
  };

  return (
    <PageContainer title="enchiladas">
      <h1 className={styles.title}>Enchiladas</h1>
      <p>Full enchiladas recipe with homemade sauce</p>
      <div className={styles.recipeContainer}>
        <div className={styles.ingredients}>
          <h2>Ingredients</h2>
          <p>Dry ingredients</p>
          <ul className={styles.ingredientsList}>
            {getIngredient(flour, 'li')}
            {getIngredient(
              chilliPowder,
              'li',
              ' (use Mild or Hot depending on how spicy you like it)'
            )}
            {getIngredient(cumin, 'li')}
            {getIngredient(oregano, 'li')}
            {getIngredient(garlicSalt, 'li', ' (or 1/2 of just salt!)')}
          </ul>
          <p>Rest of the ingredients</p>
          <ul className={styles.ingredientsList}>
            {getIngredient(oliveOil, 'li')}
            {getIngredient(choppedTomatoes, 'li')}
            {getIngredient(ciderVinegar, 'li')}
            {getIngredient(cauliflower, 'li')}
            {getIngredient(redPepper, 'li')}
            {getIngredient(vegetableStock, 'li')}
          </ul>
        </div>
        <div className={styles.steps}>
          <h2>Steps</h2>
          <div>
            <p className={styles.heading}>Enchilada Sauce</p>
            <ol className={styles.stepsList}>
              <li>Heat {getIngredient(5, 'span')} in a pan on a medium heat</li>
              <li
                className={
                  [flour, chilliPowder, cumin, oregano, garlicSalt].includes(ingredient)
                    ? styles.hover
                    : ''
                }
              >
                Once the oil is hot, pour in all the dry ingredients{' '}
                <span className="verbose">
                  ({getIngredient(flour, 'span')}, {getIngredient(chilliPowder, 'span')},{' '}
                  {getIngredient(cumin, 'span')}, {getIngredient(oregano, 'span')},{' '}
                  {getIngredient(garlicSalt, 'span')})
                </span>{' '}
                and start whisking/stirring (You can tell the oil is hot enough by putting a pinch
                of flour in and it should sizzle)
              </li>
              <li>
                After around 1 minute, pour in the {getIngredient(choppedTomatoes, 'span')} and stir
                until mixed. You can use a tiny bit of water to get any remaining tomato juice in
                the tin.
              </li>
              <li>Reduce the heat to low and simmer for about 3 minutes</li>
              <li>Stir in the {getIngredient(ciderVinegar, 'span')} and then turn off the heat</li>
            </ol>
          </div>
          <div>
            <p className={styles.heading}>Enchilada time</p>
            <ol className={styles.stepsList}>
              <li>Cut up </li>
              <li>
                Once the oil is hot, pour in all the dry ingredients and start whisking/stirring
                (You can tell the oil is hot enough by putting a pinch of flour in and it should
                sizzle)
              </li>
              <li>
                After around 1 minute, pour in the chopped tomatoes and stir until mixed. You can
                use a tiny bit of water to get any remaining tomato juice in the tin.
              </li>
              <li>Reduce the heat to low and simmer for about 3 minutes</li>
              <li>Stir in the 1 teaspoon of cider vinegar and then turn off the heat</li>
            </ol>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Enchiladas;
