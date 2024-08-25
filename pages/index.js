import { useState } from 'react';
import SpreadsheetApp from '../components/SpreadsheetApp'; // Importing SpreadsheetApp component
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spreadsheet Application</title>
        <meta name="description" content="A Next.js spreadsheet application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Spreadsheet Application</h1>
        <SpreadsheetApp />
      </main>

      <footer className={styles.footer}>
        <p>© 2024 Spreadsheet App. All rights reserved.</p>
      </footer>
    </div>
  );
}