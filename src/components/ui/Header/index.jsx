import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";
import PropTypes from "prop-types";

class UiHeader extends Component {
  componentDidMount() {
    this.props.isLoggedIn();
  }

  render() {
    const { isLogin, logout } = this.props;

    return (
      <header className={styles.wrapper}>
        <nav className={styles.nav}>
          <NavLink
            to="/"
            className={styles.navLink}
            activeClassName={styles.active}
            key="/"
          >
            Task book
          </NavLink>
        </nav>
        {!isLogin ? (
          <nav className={styles.nav}>
            <NavLink
              to="/login"
              className={styles.navLink}
              activeClassName={styles.active}
              key="/login"
            >
              LogIn
            </NavLink>
          </nav>
        ) : (
          <nav className={styles.nav}>
            <button className={styles.navLink} onClick={logout}>
              LogOut
            </button>
          </nav>
        )}
      </header>
    );
  }
}

UiHeader.propTypes = {
  isLogin: PropTypes.bool,
  logout: PropTypes.func,
  isLoggedIn: PropTypes.func
};

export default UiHeader;
