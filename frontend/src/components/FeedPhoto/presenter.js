import React from "react";
import PropTypes from "prop-types";
import styles from './styles.module.scss';
import PhotoActions from "components/PhotoActions";


const FeedPhoto = props => {
  // console.log("### FeedPhoto > presenter props: " , props);
  return (
    <div className={styles.feedPhoto}>
      <header className={styles.header}>
        <img 
          src={props.creator.profile_image || require("images/noPhoto.png")}
          alt={props.creator.username}
          className={styles.image}/>          
        <div className={styles.headerColumn}>
          <span className={styles.creator}>{props.creator.username}</span>
          <span className={styles.location}>{props.location}</span>
        </div>
      </header>
      <img src={props.file} alt={props.caption}/>
      <div>
          <PhotoActions number={props.like_count}/>
      </div>
    </div>
  );
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