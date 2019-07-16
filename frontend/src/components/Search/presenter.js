import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import Loading from "components/Loading";
import UserRow from "components/UserRow";

const Explore = props => {
  if (props.loading) {
    return <LoadingExplore />;
  }
};

const LoadingExplore = props => {
  <div className={styles.search}>
    <Looding />
  </div>
};

const Looding = props => {
  <div>
    
  </div>
}

Explore.propTypes = {
  loading: PropTypes.bool.isRequired,
  feed: PropTypes.array
};

export default Explore;