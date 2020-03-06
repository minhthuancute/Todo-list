
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "bootstrap/dist/css/bootstrap.css";
import TodoTitle from './components/TodoTitle';
import TodoForm from './components/TodoForm'
import TodoTable from './components/TodoTable'
import TodoTableDone from './components/TodoTableDone'
import TodoShowDone from './components/TodoShowDone'
import './style.scss'

const initDatas = {
   userName: "Minh Thuan",
   showTableDone: true,
   TodoTask: [
      { taskName: "", done: false },
   ],
}

class App extends Component {
   state = initDatas;

   notifySuccess = (name) => {
      toast.success(name, {
         position: toast.POSITION.RIGHT_CENTER
      });
   };

   notifyErr = () => {
      toast.error("Task Name is require!", {
         position: toast.POSITION.RIGHT_CENTER
      });
   };


   // Funtion return new array ....
   filterStatus = status => this.state.TodoTask.filter(t => t.done === status)

   // Funtion is done
   handleChecked = task => {
      this.setState({
         TodoTask: this.state.TodoTask.map(item => item.taskName === task.taskName ? { ...item, done: !item.done } : item)
      })
   }

   createNewTask = content => {
      if (!this.state.TodoTask.find(item => item.taskName === content) && content) {
         this.setState({
            TodoTask: [...this.state.TodoTask, { taskName: content, done: false }]
         }, () => {
            this.notifySuccess('Success Notification !')
            localStorage.setItem("tasks", JSON.stringify(this.state))
         })
      }
      else if (this.state.TodoTask.find(item => item.taskName === content)) {
         this.notifyErr()
      }
   }

   handleRemove = (taskName) => {
      const newArr = this.state.TodoTask.filter(task => task.taskName !== taskName);
      this.setState({
         TodoTask: newArr
      }, () => {
         localStorage.setItem('tasks', JSON.stringify(this.state))
         this.notifySuccess('Remove Success')
      })
   }

   componentDidMount() {
      const tasks = localStorage.getItem("tasks");
      this.setState(tasks !== null ? JSON.parse(tasks) : initDatas)
   }

   render() {
      const { userName, TodoTask, showTableDone } = this.state;

      return (
         <div className="App">
            <ToastContainer />
            <div className="container">
               <TodoTitle task={TodoTask} name={userName} />
               <TodoForm callBack={this.createNewTask} />
               <TodoTable tasks={this.filterStatus(false)} remove={this.handleRemove} callbackCheck={this.handleChecked} />
               <TodoShowDone isHide={showTableDone} hideTableDone={() => this.setState({ showTableDone: !showTableDone })} />
               {showTableDone && <TodoTableDone tasks={this.filterStatus(true)} callbackCheck={this.handleChecked} />}
            </div>
         </div>
      )
   }
}

export default App;