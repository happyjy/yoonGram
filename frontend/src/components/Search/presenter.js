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

const LodingExplore = props => {
  <div className={styles.search}>
    <Loding />
  </div>
};

Explore.propTypes = {
  loading: PropTypes.bool.isRequired,
  feed: PropTypes.array
};

export default Explore;