import React, { Component } from 'react';

const Logout = (props) => {
    props.UserLogout();
    return <div>You have been logged out!</div>
}

export default Logout;