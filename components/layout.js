// components/Layout.js

import Head from 'next/head'; // Optional, for setting the page title dynamically
import styles from './Layout.module.css'; // You can also create a CSS module for Layout styles

const Layout = ({ children, title = "My App" }) => {
  return (
    <div className={styles.container}>
      {/* Optional: Use Head to set a custom page title */}
      <Head>
        <title>{title}</title>
      </Head>

      {/* Header */}
      <header className={styles.header}>
        <h1>My Next.js App</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className={styles.main}>
        {children} {/* Render child components here */}
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2024 My Next.js App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
