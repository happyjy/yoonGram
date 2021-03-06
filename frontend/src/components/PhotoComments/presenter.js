import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import styles from "./styles.module.scss";

const PhotoComments = props => (
  <div className={styles.comments}>
    <ul className={styles.list}>
      <Comment comment={props.caption}/>
        {props.comments.map(comment => (
          <div key={comment.id}>
            <Comment              
              handleCommentsClick={props.handleRemoveClickEvent}
              username={comment.creator.username}
              comment={comment.message}
              commentId={comment.id}
              key={comment.id}
            />
          </div>
        ))}
    </ul>
  </div>
);

const Comment = props => (
  <li className={styles.comment}>
    <span className={styles.username}>{props.username}</span> 
    <span className={styles.message}>{props.comment}</span>
    { props.handleCommentsClick ? 
      (<span onClick={props.handleCommentsClick.bind(null, props.commentId)} className={styles.icon}>
        <Ionicon icon="ios-close" color="#EB4B59" />
      </span>) 
      : "" }
    
   
  </li>
)

PhotoComments.propTypes = {
  handleCommentsClick: PropTypes.func.isRequired
}

PhotoComments.contextTypes = {
  t: PropTypes.func.isRequired
};

export default PhotoComments;