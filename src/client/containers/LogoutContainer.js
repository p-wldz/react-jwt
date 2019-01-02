import React from 'react';
import { connect } from 'react-redux';
import { UserLogout } from '../actions/index';
import Logout from "../components/Logout";

const mapStateToProps = state => ({
    user: state.user
})
const mapDispatchToProps = (dispatch) => ({
    UserLogout: () => dispatch(UserLogout())
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(Logout)