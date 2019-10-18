
import React, { Component } from 'react'
// import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import Register from './components/TodoList/Register'
import Login from './components/TodoList/Login'
import { Alert } from 'reactstrap';


class App2 extends Component {

    state = {
        register: false,
        login: false
    };

    handleRegister = () => {
        this.setState({
            register: !this.state.register,
            login: false
        })
    }

    handleLogin = () => {
        this.setState({
            login: !this.state.login,
            register: false
        })
    }

    render() {
        return (
            <div className="container">
                <button className="left" onClick={this.handleRegister}>Register</button>
                <button onClick={this.handleLogin}>Login</button>

                {
                    this.state.register &&
                    <Register />
                }
                {
                    this.state.login &&
                    <Login />
                }

            </div>
        )
    }
}

export default App2