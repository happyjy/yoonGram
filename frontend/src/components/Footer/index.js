import React from "react";
import styles from "./styles.scss";

const Footer = (props, context) => (
  <footer className={styles.footer}>
    <div className={styles.column}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.listItme}>About Us</li>
          <li className={styles.listItme}>Support</li>
          <li className={styles.listItme}>Blog</li>
          <li className={styles.listItme}>Press</li>
          <li className={styles.listItme}>API</li>
          <li className={styles.listItme}>Jobs</li>
          <li className={styles.listItme}>Prevacy</li>
          <li className={styles.listItme}>Terms</li>
          <li className={styles.listItme}>Directory</li>
          <li className={styles.listItme}>Language</li>
        </ul>
      </nav>
    </div>
    <div className={styles.column}>
      <span className={styles.copyright}> 2019 NomadGram </span>
    </div>
  </footer>
)

export default Footer;