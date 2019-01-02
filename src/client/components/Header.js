import React from 'react';
import _ from 'lodash';

const Header = (props) => {
    let text = "";
    if (_.isEmpty(props.user))
    {
        text = "You are not logged!";
    }
    else
    {
        text = "Hello " + props.user.name;
    }
    return (
        <div className="page-header">
            <h1>{ text }</h1>
        </div>
    )
}

export default Header;