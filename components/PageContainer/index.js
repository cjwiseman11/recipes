import Head from 'next/head';
import styles from '../../styles/Home.module.css';

const PageContainer = ({ title, image = '/images/placeholder-1200.jpg', children }) => {
  return (
    <>
      <div style={{ backgroundImage: `url(${image}` }} className={styles.banner} />
      <div className={styles.container}>
        <Head>
          <title key="title">{title}</title>
        </Head>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default PageContainer;
