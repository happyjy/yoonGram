import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

class Footer extends React.Component {
  static contextTypes = {
    t: PropTypes.func.isRequired    //t: redux-i18n의 번역함수 
  };

  render() {    
    console.log("### contextTypes value: ", this.context);
    return (
      <footer className={styles.footer}>
        <div className={styles.column}>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li className={styles.listItem}>{this.context.t("About Us")}</li>
              <li className={styles.listItem}>Support</li>
              <li className={styles.listItem}>Blog</li>
              <li className={styles.listItem}>Press</li>
              <li className={styles.listItem}>API</li>
              <li className={styles.listItem}>Jobs</li>
              <li className={styles.listItem}>Prevacy</li>
              <li className={styles.listItem}>Terms</li>
              <li className={styles.listItem}>Directory</li>
              <li className={styles.listItem}>Language</li>
            </ul>
          </nav>
        </div>
        <div className={styles.column}>
          <span className={styles.copyright}> 2019 NomadGram </span>
        </div>
      </footer>
    )
  }
}

// const Footer = (props, context) => (
//   <footer className={styles.footer}>`
//     <div className={styles.column}>
//       <nav className={styles.nav}>
//         <ul className={styles.list}>
//           <li className={styles.listItem}>About Us</li>
//           <li className={styles.listItem}>Support</li>
//           <li className={styles.listItem}>Blog</li>
//           <li className={styles.listItem}>Press</li>
//           <li className={styles.listItem}>API</li>
//           <li className={styles.listItem}>Jobs</li>
//           <li className={styles.listItem}>Prevacy</li>
//           <li className={styles.listItem}>Terms</li>
//           <li className={styles.listItem}>Directory</li>
//           <li className={styles.listItem}>Language</li>
//         </ul>
//       </nav>
//     </div>
//     <div className={styles.column}>
//       <span className={styles.copyright}> 2019 NomadGram </span>
//     </div>
//   </footer>
// )

export default Footer;