import { useState } from 'react';
import styles from '../styles/Home.module.css';

import PageContainer from '../components/pageContainer';
import formatIngredient from '../components/formatIngredient';
import Ingredient from '../components/Ingredient/index';

import {
  flour,
  smokedPaprika,
  cumin,
  oregano,
  garlicSalt,
  oliveOil,
  choppedTomatoes,
  ciderVinegar,
  cauliflower,
  redPepper,
  vegetableStock,
  cheese,
  tortilla,
} from '../components/constants/ingredients';

const Enchiladas = ({ settings }) => {
  const { measurement } = settings;
  const [hoveredIngredient, setHoveredIngredient] = useState(null);
  const [clickedIngredients, setClickedIngredients] = useState([]);

  const ingredients = {
    [flour]: formatIngredient(3, 'tablespoon', 'Flour', measurement),
    [smokedPaprika]: formatIngredient(1, 'tablespoon', 'Smoked Paprika', measurement),
    [cumin]: formatIngredient(2, 'teaspoon', 'Cumin', measurement),
    [oregano]: formatIngredient(1, 'teaspoon', 'Oregano', measurement),
    [garlicSalt]: formatIngredient(1, 'teaspoon', 'Garlic Salt', measurement),
    [oliveOil]: formatIngredient(2, 'tablespoon', 'Olive Oil', measurement),
    [choppedTomatoes]: formatIngredient(400, 'g', 'Chopped Tomatoes', measurement),
    [ciderVinegar]: formatIngredient(1, 'teaspoon', 'cider vinegar', measurement),
    [cauliflower]: formatIngredient(0.5, 'whole', 'Cabbage', measurement),
    [redPepper]: formatIngredient(1, 'whole', 'Red Pepper', measurement),
    [vegetableStock]: formatIngredient(1, 'whole', 'Vegetable stock cube', measurement),
    [cheese]: formatIngredient(50, 'g', 'Cheese', measurement),
    [tortilla]: formatIngredient(4, 'whole', 'Tortilla wraps', measurement),
  };

  const isClicked = (ingredientId) => clickedIngredients.includes(ingredientId);
  const isClickedOrHighlighted = (ingredientIdList = []) =>
    ingredientIdList.some(
      (ingredientId) => isClicked(ingredientId) || ingredients[ingredientId] === hoveredIngredient
    );

  const handleClick = (ingredientId) => {
    if (isClicked(ingredientId)) {
      const updatedArray = clickedIngredients.filter((ingredient) => ingredient !== ingredientId);
      setClickedIngredients(updatedArray);
    } else {
      setClickedIngredients([...clickedIngredients, ingredientId]);
    }
  };

  const getIngredient = (ingredientId, component = 'span', info) => {
    return (
      <Ingredient
        isHighlighted={isClickedOrHighlighted([ingredientId])}
        Component={component}
        info={info}
        ingredient={ingredients[ingredientId]}
        onHighlight={setHoveredIngredient}
        onClick={() => handleClick(ingredientId)}
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
              smokedPaprika,
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
            {getIngredient(cheese, 'li')}
            {getIngredient(tortilla, 'li')}
          </ul>
        </div>
        <div className={styles.steps}>
          <h2>Steps</h2>
          <div>
            <p className={styles.heading}>Enchilada Sauce</p>
            <ol className={styles.stepsList}>
              <li>Heat {getIngredient(oliveOil, 'span')} in a pan on a medium heat</li>
              <li
                className={
                  isClickedOrHighlighted([flour, smokedPaprika, cumin, oregano, garlicSalt])
                    ? styles.hover
                    : ''
                }
              >
                Once the oil is hot, pour in all the dry ingredients{' '}
                <span className="verbose">
                  ({getIngredient(flour, 'span')}, {getIngredient(smokedPaprika, 'span')},{' '}
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
              <li>Place a frying pan on a medium/low heat</li>
              <li>
                Cut up the {getIngredient(cauliflower, 'span')} and{' '}
                {getIngredient(redPepper, 'span')} into small chunks
              </li>
              <li>
                Put a large frying pan on a medium heat and put the small chunks of cauliflower and
                pepper in to soften for about 10 minutes
              </li>
              <li>
                Grate up the {getIngredient(cheese, 'span')} and turn the oven on to 200c / 180c Fan
                / Gas Mark 6
              </li>
              <li>
                Once the cauliflower and red pepper is to your liking, pour in most of the sauce and
                cheese, leaving some back for the top of the enchiladas
              </li>
              <li>
                Split the mixture evenly into the {getIngredient(tortilla, 'span')}, roll them up
                and place together in a baking tray
              </li>
              <li>
                Pour the remaining sauce on top of the enchiladas and put some extra cheese on top
              </li>
              <li>Bake in the oven for 12 minutes</li>
            </ol>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Enchiladas;
