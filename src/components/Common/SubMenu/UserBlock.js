import React, { Component } from "react";
import Avatar from "react-avatar";
import { connect } from "react-redux";
import PropTypes from "prop-types";
class UserBlock extends Component {
  state = {};

  render() {
    const { user_name } = this.props.currentUserInfo;
    return (
      <Avatar name={user_name} size="40" round={true} alt= {user_name}/>
    );
  }
}

UserBlock.propTypes = {
  currentUserInfo: PropTypes.oneOfType([PropTypes.array,PropTypes.object ]).isRequired,
};

const mapStateToProps = (state) => {
  return {
    currentUserInfo: state.UserReducer.userInfo
  };
};

export default connect(mapStateToProps, null)(UserBlock);
