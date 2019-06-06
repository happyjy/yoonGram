import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const Footer = (props, context) => (
  <footer className={styles.footer}>
    <div className={styles.column}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.listItem}>{context.t("About Us")}</li>
          <li className={styles.listItem}>{context.t("Support")}</li>
          <li className={styles.listItem}>{context.t("Blog")}</li>
          <li className={styles.listItem}>{context.t("Press")}</li>
          <li className={styles.listItem}>{context.t("API")}</li>
          <li className={styles.listItem}>{context.t("Jobs")}</li>
          <li className={styles.listItem}>{context.t("Privacy")}</li>
          <li className={styles.listItem}>{context.t("Terms")}</li>
          <li className={styles.listItem}>{context.t("Directory")}</li>
          <li className={styles.listItem}>{context.t("Language")}</li>
        </ul>
      </nav>
    </div>
    <div className={styles.column}>
      <span className={styles.copyright}> 2019 NomadGram </span>
    </div>
  </footer>
)

Footer.contextTypes = {
  t: PropTypes.func.isRequired
};

// {
//   type: 'REDUX_I18N_SET_LANGUAGE',
//   lang: 'kr'
// }

// #3-30 Stateless Components and Context 강의때 "context" argument에 대해서 설명(footer component를 보면 context가 없습니다.)
// class Footer extends React.Component {
//   static contextTypes = {
//     t: PropTypes.func.isRequired    //t: redux-i18n의 번역함수 
//   };

//   render() {    
//     console.log("### contextTypes value: ", this.context);
//     return (
//       <footer className={styles.footer}>
//         <div className={styles.column}>
//           <nav className={styles.nav}>
//             <ul className={styles.list}>
//               <li className={styles.listItem}>{this.context.t("About Us")}</li>
//               <li className={styles.listItem}>Support</li>
//               <li className={styles.listItem}>Blog</li>
//               <li className={styles.listItem}>Press</li>
//               <li className={styles.listItem}>API</li>
//               <li className={styles.listItem}>Jobs</li>
//               <li className={styles.listItem}>Prevacy</li>
//               <li className={styles.listItem}>Terms</li>
//               <li className={styles.listItem}>Directory</li>
//               <li className={styles.listItem}>Language</li>
//             </ul>
//           </nav>
//         </div>
//         <div className={styles.column}>
//           <span className={styles.copyright}> 2019 NomadGram </span>
//         </div>
//       </footer>
//     )
//   }
// }

export default Footer;