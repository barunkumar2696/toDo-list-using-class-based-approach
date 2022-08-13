import React, { Component } from 'react'

export default class Todo extends Component {
    state = { 
        taskName:'' ,
        task:[],
    }

    
    handleChange=(e)=>{
this.setState({
    taskName:e.target.value
})
    }


    handleClick=()=>{
      if(this.state.taskName.length!==0){
       let updatedTask = [...this.state.task]
      updatedTask.push(this.state.taskName)
       this.setState({
        task: updatedTask
       })
    }}


    DeleteTask=(index)=>{
console.log(index)
let updatedTask = [...this.state.task]
updatedTask.splice(index,1)
console.log(updatedTask)
this.setState({
  task: updatedTask
})
    }


  render() {
    return (
      <div>
        <h1>Todo component connected</h1>
        <input type='text' placeholder='Enter your task' onChange={(e)=>this.handleChange(e)}/>
        <button onClick={this.handleClick}>Add task</button>
        <ol>
    {
            
            this.state.task.length !==0 ? this.state.task.map((item,idx)=>{
              return <li key={item}>{item} <button onClick={()=>this.DeleteTask(idx)}>DELETE</button></li>
            }):" "
  }
  </ol>
<h1>{JSON.stringify(this.state)}</h1>
      </div>
    )
  }
}
