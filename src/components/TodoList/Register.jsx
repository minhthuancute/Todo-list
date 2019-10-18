
import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import './register.scss'

const initDatas = {
    name: "",
    email: "",
    password: "",
    password2: "",
    status: ""

}

class Register extends Component {

    state = initDatas;

    handleRegister = async e => {
        e.preventDefault();
        const url = " http://202.182.100.160:1010/api/users/register";

        let password = this.state.password;
        let password2 = this.state.password2;
        let name = this.state.name;
        let email = this.state.email;
        const header = {
            "content-type": 'application/x-www-form-urlencoded',
            "Access-Control-Allow-Origin": "*"
        }
        if (password && password2 && name && email && (password === password2)) {
            const dataPost = {
                name: name,
                email: email,
                password: password,
                password2: password2,
            };
            const res = await axios.post(url, dataPost, header);
            console.log(res)
            this.setState({
                status: res.data.status
            })
        }

    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleRegister}>
                    <div>
                        <input onChange={this.handleChange} name="name" placeholder="Name" type="text"></input>
                    </div>
                    <div>
                        <input onChange={this.handleChange} name="email" placeholder="Email" type="email"></input>
                    </div>
                    <div>
                        <input onChange={this.handleChange} name="password" placeholder="Password" type="password"></input>
                    </div>
                    <div>
                        <input onChange={this.handleChange} name="password2" placeholder="Re-password" type="password"></input>
                    </div>
                    {
                        this.state.status === 400 &&
                        <p>Login Success</p>
                    }
                    <button type="submit" onClick={this.handleRegister}>Register</button>
                </form>
            </div>
        )
    }
}

export default Register
