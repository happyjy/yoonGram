import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import Loading from "components/Loading";
import UserRow from "components/UserRow";
import Ionicon from "react-ionicons";

const UserList = props => (
  <div className={styles.container}>
    {/* <div className={styles.overlay} /></div> */}
      <div className={styles.box}>
        <header className={styles.header}>
          <h4 className={styles.title}>{props.title}</h4>
          <span onClick={props.closeLikes}>
            <Ionicon icon="md-close" fontSize="20px" color="black" />
          </span>
        </header>
      <div className={styles.content}>
        {props.loading ? <Loading /> : <RenderUsers list={props.userList} />}
      </div>    
    </div>
  </div>
);


const RenderUsers = props => {
  // console.log("### List: ", List);
  return props.list.map(user => <UserRow user={user} key={user.id} />);
}


// const LoadingUserList = props =>
//   (UserList.propTypes = {
//     title: PropTypes.string.isRequired,
//     loading: PropTypes.bool.isRequired,
//     users: PropTypes.array
//   });


RenderUsers.propTypes = {
  list: PropTypes.array
};

UserList.propTypes = {
  title: PropTypes.string.isRequired,
  // loading: PropTypes.bool.isRequired,
  users: PropTypes.array,
  closeLikes: PropTypes.func.isRequired,
  // userList: PropTypes.array.isRequired
};

export default UserList;