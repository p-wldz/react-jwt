import React, { Component } from 'react';
import axios from 'axios';

export default class LoginForm extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            username: '',
            password: '',
            error: false
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onChange(e)
    {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onSubmit(e)
    {
        e.preventDefault();
        this.setState({ error: false });
        let credentials = { username: this.state.username, password: this.state.password };
        axios.post('http://localhost:3000/api/login', credentials)
            .then(({ data }) => {
                if (data.data != null)
                {
                    this.props.UserLogged(data.data.token);
                }
                else
                {
                    this.setState({ error: data.message});
                }
            });

    }
    render()
    {
        return <div>
            {(this.state.error) ?
                <div class="alert alert-warning" role="alert">
                { this.state.error }
                </div> : null}
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label htmlFor="Username">Username</label>
                <input type="text" className="form-control" id="Username"
                       value={this.state.username} onChange={this.onChange} name="username" placeholder="Enter username" />
            </div>
            <div className="form-group">
                <label htmlFor="Password">Password</label>
                <input type="password" className="form-control" id="Password" aria-describedby="emailHelp"
                       value={this.state.password} onChange={this.onChange} name="password" placeholder="Enter password" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
        </div>
    }
};