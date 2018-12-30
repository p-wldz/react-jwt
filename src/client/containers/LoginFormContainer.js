import React from 'react';
import { connect } from 'react-redux';
import { UserLogged } from '../actions/index';
import LoginForm from "../components/LoginForm";

const mapStateToProps = state => ({
    user: state.user
})
const mapDispatchToProps = (dispatch) => ({
    UserLogged: (token) => dispatch(UserLogged(token))
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(LoginForm)