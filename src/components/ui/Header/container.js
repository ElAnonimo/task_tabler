import { connect } from "react-redux";
import Header from "./index.jsx";
import { logout, isLoggedIn } from "../../../actions/auth";

const mapStateToProps = state => ({
  isLogin: state.auth.isLogin
});

const mapDispatchToProps = {
  logout,
  isLoggedIn
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
