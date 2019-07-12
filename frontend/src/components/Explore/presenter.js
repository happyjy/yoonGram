import React from "react";
import PropTypes from "prop-types";
import styles from './styles.module.scss';
import Loading from "components/Loading";
import UserRow from "components/UserRow";


const Explore = props => {
  if(props.loading){
    return <LoadingExplore />
  } else if (props.userList) {
    // console.log("### Explore > presenter.js > props", props);
    return <RenderExplore {...props} />
  }
}

const LoadingExplore = props => (
  <div className={styles.explore}>
    <Loading/>
  </div>
)

const RenderExplore = props => (
  <div className={styles.explore}>
    {props.userList.map(user => (
      <UserRow big={true} user={user} key={user.id} />
    ))}
  </div>
)

Explore.propTyps = {
  loading: PropTypes.bool.isRequired,
  userList: PropTypes.array
}

export default Explore;