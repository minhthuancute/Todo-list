
import React, { Component } from 'react'

class TableRowDone extends Component {
    render() {
        const { done, taskName, task } = this.props.task;

        return (
            <>
                <tr key={task}>
                    <td>
                        <p style={{
                            transform: 'translateY(5px)'
                        }}>{taskName}</p>
                    </td>
                    <td>
                        <div className='d-flex justify-content-between align-items-lg-center' style={{
                            marginTop: '8px'
                        }}>
                            <input style={{
                                cursor: 'pointer',
                                transform: 'translateY(-3px)'
                            }} checked={done} onChange={() => this.props.callbackCheck(this.props.task)} type="checkbox"></input>
                        </div>
                    </td>
                </tr>
            </>
        )
    }
}

export default TableRowDone
