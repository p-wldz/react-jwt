import React from 'react';
import { connect } from 'react-redux';
import Welcome from '../components/Welcome';

const mapStateToProps = state => ({
    user: state.user
});

export default connect(
    mapStateToProps
)(Welcome)