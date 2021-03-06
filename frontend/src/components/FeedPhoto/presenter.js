import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import PhotoActions from 'components/PhotoActions';
import PhotoComments from 'components/PhotoComments';
import TimeStamp from 'components/TimeStamp';
import CommentBox from 'components/CommentBox';
import UserList from 'components/UserList';

const FeedPhoto = (props, context) => {
	// console.log("### FeedPhoto > presenter props: " , props);
	return (
		<div className={styles.feedPhoto}>
			<header className={styles.header}>
				<img
					src={props.creator.profile_image || require('images/noPhoto.png')}
					alt={props.creator.username}
					className={styles.image}
				/>
				<div className={styles.headerColumn}>
					<span className={styles.creator}>{props.creator.username}</span>
					<span className={styles.location}>{props.location}</span>
				</div>
			</header>
			<img src={props.file} alt={props.caption} />
			<div className={styles.meta}>
				<PhotoActions
					number={props.like_count}
					isLiked={props.is_liked}
					photoId={props.id}
					openLikes={props.openLikes}
				/>
				<PhotoComments
					photoId={props.id}
					caption={props.caption}
					creator={props.creator.username}
					comments={props.comments}
				/>
				<TimeStamp time={props.natural_time} />
				<CommentBox photoId={props.id} />

				{props.seeingLikes && <UserList title={context.t('Likes')} closeLikes={props.closeLikes} />}
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
	natural_time: PropTypes.string.isRequired,
	is_liked: PropTypes.bool.isRequired,
	id: PropTypes.number.isRequired,
	seeingLikes: PropTypes.bool.isRequired,
	closeLikes: PropTypes.func.isRequired,
	openLikes: PropTypes.func.isRequired,
	likes: PropTypes.arrayOf(
		PropTypes.shape({
			profile_image: PropTypes.string,
			username: PropTypes.string,
			name: PropTypes.string
		}).isRequired
	)
};

FeedPhoto.contextTypes = {
	t: PropTypes.func.isRequired
};

export default FeedPhoto;
