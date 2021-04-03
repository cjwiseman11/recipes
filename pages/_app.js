import '../styles/globals.css';
import styles from '../styles/header.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Switch from '../components/Switch/index';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [settings, setSettings] = useState({
    measurement: 'UK',
    verbose: true,
  });

  const handleMeasurement = (result) => {
    setSettings({
      ...settings,
      measurement: result,
    });
  };

  const handleVerbose = (result) => {
    setSettings({
      ...settings,
      verbose: result === 'No' ? false : true,
    });
  };

  return (
    <>
      <Head>
        <title key="title">Recipes for Two</title>
        <link rel="icon" href="/favicon.ico" />
        <link key="font-pre" rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          key="font"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className={styles.headerContainer}>
        <Link href="/">
          <a>
            <div className={styles.header}>
              <img src="/images/lime.png" height="120" width="120" />
              <h1>Recipes for Two</h1>
            </div>
          </a>
        </Link>
        <div className={styles.switches}>
          <Switch label="Measurement" onSelected={handleMeasurement} options={['UK', 'US']} />
          <Switch label="Verbose" onSelected={handleVerbose} options={['Yes', 'No']} />
        </div>
      </header>

      <div className={!settings.verbose ? 'simple' : ''}>
        <Component {...pageProps} settings={settings} />
      </div>
      <footer>
        <p>
          <a href="https://peppertech.co.uk">Peppertech UK</a>
        </p>
      </footer>
    </>
  );
}

export default MyApp;
