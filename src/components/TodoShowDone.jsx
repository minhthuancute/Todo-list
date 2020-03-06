
import React, { Component } from 'react'

class TodoShowDone extends Component {

    render() {
        return (
            <div className="show-tasks bg-secondary text-white text-center p-2">
                <input onChange={this.props.hideTableDone} style={{
                    cursor: 'pointer'
                }} type="checkbox" className="form-check-input" checked={this.props.isHide} />
                <label className="form-check-label">
                    Show completed tasks
               </label>
            </div>
        )
    }
}

export default TodoShowDone
