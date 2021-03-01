import '../styles/globals.css'
import styles from '../styles/header.module.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header>
        <div className={styles.header}>
          <img src="/images/lime.png" height="120" width="120" />
          <h1>
            Recipes for Two
          </h1>
        </div>
      </header>
      <Component {...pageProps} />
      <footer>
        <p><a href="https://peppertech.co.uk">Peppertech UK</a></p>
      </footer>
    </>
  );
}

export default MyApp
