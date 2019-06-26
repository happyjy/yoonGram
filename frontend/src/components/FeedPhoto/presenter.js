import React from "react";
import PropTypes from "prop-types";
import styles from './styles.module.scss';


const FeedPhoto = props => {
  console.log("### FeedPhoto props: " , props);
  return <div className={styles.feedPhoto}>hello!</div>;
};

//위 props를 설정하는것입니다.
FeedPhoto.propType = {
  creator: PropTypes.shape({
    profile_image: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  }).isRequired, 
  location: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired,
  like_count: PropTypes.number.isRequired,
  captions: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      creator: PropTypes.shape({
        profile_image: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired,
  created_at: PropTypes.string.isRequired
}

export default FeedPhoto;