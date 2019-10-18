
import React, { Component } from 'react'
import axios from 'axios'

class Login extends Component {

    state = {
        email: "",
        password: ""
    }

    handleLogin = async e => {
        e.preventDefault();
        const url = " http://202.182.100.160:1010/api/users/register";

        let email = this.state.email;
        let password = this.state.password;
        const header = {
            "content-type": 'application/x-www-form-urlencoded',
            "Access-Control-Allow-Origin": "*"
        }
        if (password && email) {
            const dataPost = this.state;
            const res = await axios.post(url, dataPost, header);
            console.log(res)
        }
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleLogin}>
                <div>
                    <input type="email" onChange={this.handleChange} name="email" placeholder="Email"></input>
                </div>
                <div>
                    <input type="password" onChange={this.handleChange} name="password" placeholder="Password"></input>
                </div>
            </form>
        )
    }
}

export default Login
