
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

class App2 extends Component {

    state = {
        inputValue: "",
        arrTask: [
            { taskName: "", createAt: "" }
        ]
    }

    getValue = async (e) => {
        this.setState({
            inputValue: await e.target.value
        })
        // console.log(this.state.inputValue)
    }

    createNewTask = (e) => {
        e.preventDefault(); // chong load lai trang
        // Get real Date

        let newDate = new Date();
        let final = "Created at: " + newDate.getDate() + "/" + (newDate.getMonth() + 1) + "/" + newDate.getFullYear();

        let content = this.state.inputValue
        if (!this.state.arrTask.find(item => item.taskName === content)) {
            this.setState({
                inputValue: "",
                arrTask: [...this.state.arrTask, { taskName: content, createAt: final }]
            })
        }
    }

    handleDelete = (index) => {
        let key = this.state.arrTask[index].taskName;
        // -> key = "taskName"
        let newArr = this.state.arrTask.filter(item => item.taskName !== key);

        this.setState({
            arrTask: newArr
        })
    }

    render() {
        return (
            <div className="App">
                <form onSubmit={this.createNewTask}>
                    <input value={this.state.inputValue} onChange={this.getValue} placeholder="Create New Task"></input>
                </form>
                <ul>
                    {
                        this.state.arrTask.map((item, index) => {
                            if (item.taskName !== "") {
                                return (
                                    <div key={index}>
                                        <li>{item.taskName}</li>
                                        <p>{item.createAt}</p>
                                        <button>Edit</button>

                                        {/* higher order funtion */}
                                        <button onClick={() => this.handleDelete(index)}>Delete</button>
                                    </div>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default App2
