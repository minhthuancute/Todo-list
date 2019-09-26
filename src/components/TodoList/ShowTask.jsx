
import React, { Component } from 'react'


class ShowTask extends Component {
    render() {
        return (
            <div>
                {this.props.tasks.map(item => {
                    return (
                        <p key={item.taskName}>{item.taskName}</p>
                    )
                })}
            </div>
        )
    }
}

export default ShowTask
