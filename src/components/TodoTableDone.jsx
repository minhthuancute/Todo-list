
import React, { Component } from 'react'
import TableRowDone from './TableRowDone'

class TodoTableDone extends Component {
   render() {
      const { callbackCheck } = this.props;
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
                     <TableRowDone task={task} key={task.taskName} callbackCheck={callbackCheck} />
                  )
               })}
            </tbody>
         </table>
      )
   }
}

export default TodoTableDone
