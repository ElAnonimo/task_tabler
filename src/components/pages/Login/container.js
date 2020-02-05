import { connect } from "react-redux";
import TaskPage from "./index.jsx";
import { login } from "../../../actions/auth";

const mapStateToProps = state => ({
  errorMessage: state.auth.errorMessage,
  isLogin: state.auth.isLogin
});

const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage);
