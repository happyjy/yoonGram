import React from "react";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";
import formStyles from "shared/formStyles.module.scss";

const SignupForm = (props, context) => (
  <div className={formStyles.formComponent}>
    <h3 className={formStyles.signupHeader}>{context.t("Sign up to see photos and videos from your friends.")}</h3>
    <FacebookLogin
      appId="439823963500710"
      autoLoad={false}
      fields="name,email,picture"
      callback={props.handleFacebookLogin}
      cssClass={formStyles.button}
      icon="fa-facebook-official"
      textButton={context.t("Log in with Facebook")}/>
    <span className={formStyles.divider}>{context.t("or")}</span>
    <form className={formStyles.form} onSubmit={props.handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder={context.t("Email")}
        value={props.emailValue}
        onChange={props.handleInputChange}
        className={formStyles.textInput}/>
      <input
        type="text"
        name="name"
        value={props.nameValue}
        onChange={props.handleInputChange}
        placeholder={context.t("Full Name")}
        className={formStyles.textInput}/>
      <input
        type="username"
        name="username"
        value={props.usernameValue}
        onChange={props.handleInputChange}
        placeholder={context.t("Username")}
        className={formStyles.textInput}/>
      <input
        type="password"
        name="password"
        value={props.passwordValue}
        onChange={props.handleInputChange}
        placeholder={context.t("Password")}
        className={formStyles.textInput}/>
      <input
        type="submit"
        placeholder={context.t("Sign up")}
        className={formStyles.button}/>
    </form>
    <p className={formStyles.terms}>
      {context.t("By signing up, you agree to our")}
      <span> {context.t("Terms & Privacy Policy")}</span>
    </p>
  </div>
);

SignupForm.contextType = {
  emailValue: PropTypes.string.isRequired,
  nameValue: PropTypes.string.isRequired,
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleFacebookLogin: PropTypes.func.isRequired
}

SignupForm.contextTypes = {
  t: PropTypes.func.isRequired
};

export default SignupForm;