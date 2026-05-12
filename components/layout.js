import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <h1 className={utilStyles.heading2Xl}>Your Name</h1>
          </>
        ) : (
          <>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                Your Name
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
