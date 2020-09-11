
import React, { Component } from 'react'

class TableRowDone extends Component {
    render() {
        const { done, taskName, task } = this.props.task;

        return (
            <>
                <tr key={task}>
                    <td>
                        <p style={{
                            marginTop: '10px'
                        }}>{taskName}</p>
                    </td>
                    <td>
                        <input style={{
                            cursor: 'pointer',
                            marginTop: '15px'
                        }} checked={done} onChange={() => this.props.callbackCheck(this.props.task)} type="checkbox"></input>
                    </td>
                </tr>
            </>
        )
    }
}

export default TableRowDone
