import React from "react";
import PropTypes from "prop-types";
import styles from './styles.module.scss';
import PhotoActions from "components/PhotoActions";
import PhotoComments from "components/PhotoComments";
import TimeStamp from "components/TimeStamp";


const FeedPhoto = props => {
  // console.log("### FeedPhoto > presenter props: " , props);
  return (
    <div className={styles.feedPhoto}>
      <header className={styles.header}>
        <img 
          src={props.creator.profile_image || require("images/noPhoto.png")}
          alt={props.creator.username}
          className={styles.image}
        />          
        <div className={styles.headerColumn}>
          <span className={styles.creator}>{props.creator.username}</span>
          <span className={styles.location}>{props.location}</span>
        </div>
      </header>
      <img src={props.file} alt={props.caption} />
      <div>
          <PhotoActions number={props.like_count} />
          <PhotoComments 
            caption={props.caption}
            creator={props.creator.username}
            comments={props.comments} 
          />
          <TimeStamp time={props.natural_time} />
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
  caption: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      creator: PropTypes.shape({
        profile_image: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired,
  natural_time: PropTypes.string.isRequired
}

export default FeedPhoto;