
import React, { Component } from 'react'

class TableRow extends Component {
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
                            <button onClick={() => this.props.remove(taskName)} className='btn btn-danger text-white' style={{
                                padding: '3px 10px',
                                transform: 'translateY(-5px)'
                            }}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            </>
        )
    }
}

export default TableRow
