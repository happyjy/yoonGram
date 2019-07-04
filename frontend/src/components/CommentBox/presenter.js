import React from "react";
import PropTypes from "prop-types";
import Textarea from "react-textarea-autosize";
import styles from "./styles.module.scss";

const CommentBox = (props, context) => (
  <form className={styles.commentBox} onSubmit={props.handleSubmit}>
    <Textarea
      className={styles.input}
      placeholder={context.t("Add a comment...")}
      onChange={props.handleInputChange}
      value={props.comment}
      onKeyPress={props.handleKeyPress}
    />
  </form>
);

CommentBox.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  comment: PropTypes.string.isRequired,
  photoId: PropTypes.number.isRequired
};

CommentBox.contextTypes = {
  t: PropTypes.func.isRequired
};

export default CommentBox;