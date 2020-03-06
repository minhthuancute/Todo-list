
import React, { Component } from 'react'

class TodoTitle extends Component {
    render() {
        return (
            <div>
                <h4 className="bg-primary text-center text-white p-2 mt-2">{this.props.name}'s To Do List ({this.props.task.filter(t => !t.done).length - 1} Items to do)</h4>
            </div>
        );
    }
}

export default TodoTitle;
