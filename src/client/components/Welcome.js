import React, { Component } from 'react';


export default class Welcome extends Component {
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return <div>
            Hello <strong> {(this.props.user.name) ? this.props.user.name : 'strange'} </strong>!
        </div>
    }
}