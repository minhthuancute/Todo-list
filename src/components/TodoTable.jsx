
import React, { Component } from 'react'
import TableRow from './TableRow'

class TodoTable extends Component {

    render() {
        const { callbackCheck, remove } = this.props;
        return (
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Done</th>
                    </tr>
                </thead>

                <tbody>
                    {this.props.tasks.map(task => {
                        return (
                            task.taskName !== '' && <TableRow remove={remove} task={task} key={task.taskName} callbackCheck={callbackCheck} />
                        )
                    })}
                </tbody>

            </table>
        )
    }
}

export default TodoTable
