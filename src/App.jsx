
/* Author Thuan Cute */

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'font-awesome/css/font-awesome.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initDatas = {
   inputValue: "",
   idEdit: -1,
   todoTask: [
      { taskName: "", createAt: "" }
   ]
}

class App extends Component {

   state = initDatas

   componentDidMount() {
      const tasks = localStorage.getItem("tasks");
      this.setState(tasks !== null ? JSON.parse(tasks) : initDatas)
   }

   notify = () => toast("Wow so easy !");

   notifySuccess = () => {
      toast.success("Success Notification !", {
         position: toast.POSITION.RIGHT_CENTER,
         pauseOnHover: false
      });
   };

   notifyError = () => {
      toast.error("Notification Already Exis !", {
         position: toast.POSITION.RIGHT_CENTER,
         pauseOnHover: false
      })
   }

   notifyChange = () => {
      toast.success("Changed Successfuly !", {
         position: toast.RIGHT_CENTER,
         pauseOnHover: false
      })
   }

   // around funtion
   handleChange = (e) => {
      this.setState({
         inputValue: e.target.value
      })
   }

   componentDidMount = () => {
      const task = localStorage.getItem("task");
      this.setState(task !== null ? JSON.parse(task) : initDatas);
   }

   createNewTask = (e) => {
      e.preventDefault();

      let content = this.state.inputValue;
      let idEdit = this.state.idEdit;
      let newDate = new Date();
      let final = "Created at: " + newDate.getDate() + "/" + (newDate.getMonth() + 1) + "/" + newDate.getFullYear()
         + " Time : " + newDate.getMinutes() + ":" + newDate.getHours();

      let finalEdit = "Updated at: " + newDate.getDate() + "/" + (newDate.getMonth() + 1) + "/" + newDate.getFullYear()
         + " Time : " + newDate.getMinutes() + ":" + newDate.getHours();
      // Add new task
      if (!this.state.todoTask.find(item => item.taskName === content) && content && idEdit === -1) {
         this.setState({
            inputValue: "",
            todoTask: [...this.state.todoTask, { taskName: content, createAt: final }]
         }, () => {
            this.notifySuccess()
            localStorage.setItem("tasks", JSON.stringify(this.state))
         })
      }

      if (this.state.todoTask.find(item => item.taskName === content)) {
         this.setState({
            inputValue: ""
         }, () => {
            this.notifyError()
         })
      }

      // Add new edit
      if (!this.state.todoTask.find(item => item.taskName === content) && content && idEdit !== -1) {
         let index = this.state.idEdit

         const arr1 = [...this.state.todoTask.slice(0, index)]; // lay tu 1 den truoc vi tri index
         // Change arr2
         const arr2 = [...[], { ...this.state.todoTask[index], taskName: content, createAt: finalEdit }]; // lay tai vi tri index
         const arr3 = [...this.state.todoTask.slice(index + 1)] // lay tu index+1 -> lenght
         const arrEdited = arr1.concat(arr2, arr3)
         this.setState({
            idEdit: -1,
            todoTask: arrEdited,
            inputValue: ""
         }, () => {
            this.notifyChange()
            localStorage.setItem("tasks", JSON.stringify(this.state))
         })
      }
   }

   handleDelete = (index) => {
      const isDelete = this.state.todoTask[index].taskName;
      const todoTask = this.state.todoTask.filter(item => item.taskName !== isDelete);
      this.setState({
         todoTask: todoTask
      }, () => {
         this.notifyChange()
         localStorage.setItem("tasks", JSON.stringify(this.state))
      })
   }

   handleEdit = (index) => {
      let contentEdit = this.state.todoTask[index].taskName;
      this.setState({
         inputValue: contentEdit,
         idEdit: index
      })
   }

   render() {
      return (
         <div className="container">
            <ToastContainer pauseOnHover={false} />
            <form onSubmit={this.createNewTask}>
               <input value={this.state.inputValue} onChange={this.handleChange} type="text" placeholder="Add new task" className="add"></input>
            </form>
            <div className="display">
               {
                  this.state.todoTask.map((item, index) => {
                     if (item.taskName) {
                        return (
                           <div className="main" key={item.taskName}>
                              <div>
                                 <p>{item.taskName}</p>
                                 <p className="edit">{item.createAt}</p>
                              </div>

                              <div>
                                 <button onClick={() => this.handleEdit(index)} className="btn btn-primary mr-2">Edit</button>
                                 <button onClick={() => this.handleDelete(index)} className="btn btn-success">Delete</button>
                              </div>
                           </div>
                        )
                     }
                  })}
            </div>
         </div>
      );
   }
}

export default App;