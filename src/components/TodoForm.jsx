
import React, { Component } from 'react'

class TodoForm extends Component {

    state = {
        inputValue: ""
    }

    handleChange = e => {
        this.setState({
            inputValue: e.target.value
        })
    }

    createNewTask = (e) => {
        e.preventDefault()
        this.setState({
            inputValue: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.createNewTask} className="form-creator mt-4">
                <input value={this.state.inputValue} type="text" className="form-control" onChange={this.handleChange} />
                <button className="btn btn-success mt-2 mb-4" onClick={() => this.props.callBack(this.props.callBack(this.state.inputValue))}>Add</button>
            </form>
        )
    }
}

export default TodoForm
