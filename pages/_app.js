import '../styles/globals.css';
import styles from '../styles/header.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Switch from '../components/Switch';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [settings, setSettings] = useState({
    measurement: 'uk',
    verbose: true,
  });

  const handleMeasurement = (result) => {
    setSettings({
      ...settings,
      measurement: result ? 'us' : 'uk',
    });
  };

  const handleVerbose = (result) => {
    setSettings({
      ...settings,
      verbose: result ? false : true,
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
      <header>
        <Link href="/">
          <a>
            <div className={styles.header}>
              <img src="/images/lime.png" height="120" width="120" />
              <h1>Recipes for Two</h1>
            </div>
          </a>
        </Link>
      </header>
      <Switch label="UK Measurements" onToggle={handleMeasurement} />
      <Switch label="Verbose" onToggle={handleVerbose} />
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
