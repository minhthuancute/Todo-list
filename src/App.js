
/* Author Thuan Cute */

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'font-awesome/css/font-awesome.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initDatas = {
   inputValue: "",
   idEdit: -1,
   todoTask: [{ taskName: "", createAt: "" }]
}

class App extends Component {
   notify = () => toast("Wow so easy !");

   notify = () => {
      toast.success("Success Notification !", {
         position: toast.POSITION.TOP_CENTER
      });
   };

   state = initDatas

   componentDidMount() {
      const tasks = localStorage.getItem("tasks");
      this.setState(tasks !== null ? JSON.parse(tasks) : initDatas)
   }

   handleChange = (e) => {
      this.setState({
         inputValue: "",
         inputValue: e.target.value
      })
   }

   createNewTask = (e) => {
      e.preventDefault();
      let content = this.state.inputValue;
      let idEdit = this.state.idEdit
      // Get real date //
      let newDate = new Date();
      let date, month, year;
      date = newDate.getDate();
      month = newDate.getMonth() + 1;
      year = newDate.getFullYear();
      let final = "Created at: " + date + "/" + month + "/" + year;
      let finalEdit = "Edited at: " + date + "/" + month + "/" + year;
      // Kiem tra task da ton tai hay chua , su dung ! phu dinh lai
      if (!this.state.todoTask.find(item => item.taskName === content) && content && idEdit === -1) {
         this.setState({
            inputValue: "",
            todoTask: [...this.state.todoTask, { taskName: content, createAt: final }]
         }, () => {
            this.notify()
            localStorage.setItem("tasks", JSON.stringify(this.state))
         })
      }

      if (!this.state.todoTask.find(item => item.taskName === content) && content && idEdit !== -1) {
         let index = this.state.idEdit
         const arr1 = [...this.state.todoTask.slice(0, index)]; // lay tu 1 den truoc vi tri index
         const arr2 = [...[], { ...this.state.todoTask[index], taskName: content, createAt: finalEdit }]; // lay tai vi tri index
         const arr3 = [...this.state.todoTask.slice(index + 1)] // lay tu index+1 -> lenght
         const arrEdited = arr1.concat(arr2, arr3)
         this.setState({
            idEdit: -1,
            todoTask: arrEdited,
            inputValue: ""
         }, () => {
            this.notify()
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
            <ToastContainer />
            <form onSubmit={this.createNewTask}>
               <input value={this.state.inputValue} onChange={this.handleChange} type="text" placeholder="Add new task" className="add"></input>
            </form>
            <div className="display">
               {
                  this.state.todoTask.map((item, index) => {
                     if (item.taskName !== "") {
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
