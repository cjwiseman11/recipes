import Head from 'next/head';
import styles from '../styles/Home.module.css';

import formatIngredient from '../components/formatIngredient';

export default function Enchiladas({ unitType = 'uk' }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Enchiladas
        </h1>
        <div className={styles.recipeContainer}>
          <div className={styles.ingredients}>
            <h2>Ingredients</h2>
            <p>Dry ingredients</p>
            <ul>  
              <li>{formatIngredient(3, 'tablespoon','Flour', unitType)}</li>
              <li>{formatIngredient(1, 'tablespoon', 'Mild Chilli Powder',  unitType)} (hot if you want it spicy!)</li>
              <li>{formatIngredient(1, 'tablespoon', 'Cumin', unitType)}</li>
              <li>{formatIngredient(1, 'teaspoon', 'Oregano', unitType)}</li>
              <li>{formatIngredient(1, 'teaspoon', 'Garlic Salt', unitType)} (or 1/2 of just salt!)</li>
            </ul>
            <p>Rest of the ingredients</p>
            <ul>
              <li>{formatIngredient(3, 'tablespoon', 'Olive Oil', unitType)}</li>
              <li>{formatIngredient(400, 'g', 'Chopped Tomatoes', unitType)}1 400g tin of Chopped Tomatoes</li>
              <li>{formatIngredient(1, 'teaspoon', 'cider vinegar', unitType)}</li>
              <li>1 Vegetable stock cube</li>
            </ul>
          </div>
          <div className={styles.steps}>
            <h2>Steps</h2>
            <div>
              <p className={styles.heading}>Enchilada Sauce</p>
              <ol className={styles.stepsList}>
                <li>Heat 3 tablespoons of olive oil in a pan on a medium heat</li>
                <li>Once the oil is hot, pour in all the dry ingredients and start whisking/stirring (You can tell the oil is hot enough by putting a pinch of flour in and it should sizzle)</li>
                <li>After around 1 minute, pour in the chopped tomatoes and stir until mixed. You can use a tiny bit of water to get any remaining tomato juice in the tin.</li>
                <li>Reduce the heat to low and simmer for about 3 minutes</li>
                <li>Stir in the 1 teaspoon of cider vinegar and then turn off the heat</li>
              </ol>
            </div>
            <div>
              <p className={styles.heading}>Enchilada time</p>
              <ol className={styles.stepsList}>
                <li>Fry the cauliflower and</li>
                <li>Once the oil is hot, pour in all the dry ingredients and start whisking/stirring (You can tell the oil is hot enough by putting a pinch of flour in and it should sizzle)</li>
                <li>After around 1 minute, pour in the chopped tomatoes and stir until mixed. You can use a tiny bit of water to get any remaining tomato juice in the tin.</li>
                <li>Reduce the heat to low and simmer for about 3 minutes</li>
                <li>Stir in the 1 teaspoon of cider vinegar and then turn off the heat</li>
              </ol>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p><a href="https://peppertech.co.uk">Peppertech UK</a></p>
      </footer>
    </div>
  )
}
