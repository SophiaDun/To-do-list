import React, { useState } from 'react';
import Grid from "../components/grid";
import '../App.css';

function Todolist (){

    const [todo, setTodo] = useState({ desc: '', date: '' });
    const [todos, setTodos] = useState([]);
  
    const inputChanged = (e) => {
      setTodo({ ...todo, [e.target.name]: e.target.value });
    };
  
    const addTodo = (e) => {
      e.preventDefault();
      setTodos([...todos, todo]);
   
    };
   const deleteByIndex =(index) => {
    const deletedTodos = todos.filter((todo, i) => i !== index)
    setTodos(deletedTodos);
   };

    return(
<>
<div className="logo"> 
        <span className="material-symbols-outlined">
          stylus_note
        </span>
        <h1>Todo List</h1>
      </div>


      <form onSubmit={addTodo}>

        <div className="row">

          <div className="col-md-2">
            <input
              className="form-control"
              type="date"
              name="date"
              value={todo.date}
              onChange={inputChanged}
            />
          </div>

          <div className="col-md-4">
            <input
              className="form-control"
              type="text"
              name="desc"
              value={todo.desc}
              onChange={inputChanged}
              placeholder='Insert description'
            />
         </div>

         <div className="col-md-4">
            <input
              className="form-control"
              type="text"
              name="priority"
              value={todo.priority}
              onChange={inputChanged}
              placeholder='low / medium / high'
            />
         </div>

          <div className="col-md-2">
          <button className="button" type="submit" value="+" >+</button>
         
        </div>

        </div>
      </form>
      <Grid data={todos} deleteByIndex={deleteByIndex}/>  
</>
    );
}
export default Todolist;