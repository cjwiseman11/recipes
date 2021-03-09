import { useState } from 'react';
import styles from '../styles/Home.module.css';

import PageContainer from '../components/pageContainer';
import formatIngredient from '../components/formatIngredient';

const Enchiladas = ({ settings }) => {
  const { measurement } = settings;
  const [ingredient, setIngredient] = useState(null);

  const ingredients = [
    formatIngredient(3, 'tablespoon', 'Flour', measurement),
    formatIngredient(1, 'tablespoon', 'Chilli Powder', measurement),
    formatIngredient(1, 'tablespoon', 'Cumin', measurement),
    formatIngredient(1, 'teaspoon', 'Oregano', measurement),
    formatIngredient(1, 'teaspoon', 'Garlic Salt', measurement),
    formatIngredient(3, 'tablespoon', 'Olive Oil', measurement),
    formatIngredient(400, 'g', 'Chopped Tomatoes', measurement),
    formatIngredient(1, 'teaspoon', 'cider vinegar', measurement),
  ];

  const getIngredient = (index, Component = 'span', info) => {
    return (
      <Component
        onMouseEnter={() => setIngredient(index)}
        onMouseLeave={() => setIngredient(null)}
        className={[index].includes(ingredient) ? styles.hover : ''}
      >
        {ingredients[index]}
        {info}
      </Component>
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
            {getIngredient(0, 'li')}
            {getIngredient(1, 'li', ' (use Mild or Hot depending on how spicy you like it)')}
            {getIngredient(2, 'li')}
            {getIngredient(3, 'li')}
            {getIngredient(4, 'li', ' (or 1/2 of just salt!)')}
          </ul>
          <p>Rest of the ingredients</p>
          <ul className={styles.ingredientsList}>
            {getIngredient(5, 'li')}
            {getIngredient(6, 'li')}
            {getIngredient(7, 'li')}
            <li>1 Vegetable stock cube</li>
          </ul>
        </div>
        <div className={styles.steps}>
          <h2>Steps</h2>
          <div>
            <p className={styles.heading}>Enchilada Sauce</p>
            <ol className={styles.stepsList}>
              <li>Heat {getIngredient(5, 'span')} in a pan on a medium heat</li>
              <li className={[0, 1, 2, 3, 4].includes(ingredient) ? styles.hover : ''}>
                Once the oil is hot, pour in all the dry ingredients{' '}
                <span className="verbose">
                  ({getIngredient(0, 'span')}, {getIngredient(1, 'span')},{' '}
                  {getIngredient(2, 'span')}, {getIngredient(3, 'span')}, {getIngredient(4, 'span')}
                  )
                </span>{' '}
                and start whisking/stirring (You can tell the oil is hot enough by putting a pinch
                of flour in and it should sizzle)
              </li>
              <li>
                After around 1 minute, pour in the {getIngredient(6, 'span')} and stir until mixed.
                You can use a tiny bit of water to get any remaining tomato juice in the tin.
              </li>
              <li>Reduce the heat to low and simmer for about 3 minutes</li>
              <li>Stir in the {getIngredient(7, 'span')} and then turn off the heat</li>
            </ol>
          </div>
          <div>
            <p className={styles.heading}>Enchilada time</p>
            <ol className={styles.stepsList}>
              <li>Fry the cauliflower and</li>
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
