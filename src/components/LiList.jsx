
import React, { Component } from 'react'
// import classes from './List.module.css'
import classes from './List.module.css'

class LiList extends Component {
    render() {
        // Add item to array
        let listClass = [...[], classes.red, classes.big];
        return (
            this.props.list.filter(item => item.done === false).map((val, index) => <li key={index} className={listClass.join(' ')}>{val.taskName}</li>)
        )
    }
}

export default LiList
