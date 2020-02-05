import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import { withRouter } from "react-router-dom";
import LoginForm from "../../ui/LoginForm";
import DialogHeader from "../../ui/DialogHeader";

const customStyles = {
  overlay: {
    zIndex: "10"
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "400px",
    marginRight: "-50%",
    padding: "0",
    transform: "translate(-50%, -50%)"
  }
};

class LoginPage extends Component {
  constructor() {
    super();

    this.state = {
      open: true
    };
  }
  closeLoginForm = () => {
    this.setState({
      open: false
    });

    this.props.history.push("/");
  };

  handleLogin = data => {
    this.props.login(data);
  };

  render() {
    const { errorMessage, isLogin } = this.props;

    return (
      <Modal isOpen={this.state.open} style={customStyles}>
        <DialogHeader
          title={isLogin ? "You logged in successfully" : "Login"}
          onClose={this.closeLoginForm}
        />
        {!isLogin && (
          <LoginForm onSubmit={this.handleLogin} errorMessage={errorMessage} />
        )}
      </Modal>
    );
  }
}

LoginPage.propTypes = {
  errorMessage: PropTypes.string,
  isLogin: PropTypes.bool,
  history: PropTypes.any,
  login: PropTypes.func
};

export default withRouter(LoginPage);
