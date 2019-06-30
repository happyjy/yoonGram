import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const CommentBox = (props, context) => (
  <from>
    <textarea placeholder={context.t("Add a comment...")} />
  </from>
);

CommentBox.contextTypes = {
  t: PropTypes.func.isRequired
};

export default CommentBox;