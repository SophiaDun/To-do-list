import React, { useState } from 'react';
import Grid from "../components/grid";
import '../App.css';

import TextField from '@mui/material/TextField';
import DateSelector from './datepicker';


function Todolist (){

    const [todo, setTodo] = useState({ desc: '', date: '' ,priority:''});
    const [todos, setTodos] = useState([]);
  
    const inputChanged = (e) => {
      setTodo({ ...todo, [e.target.name]: e.target.value });
    };
    const DateChange = (date) => {
      setTodo({ ...todo, date });
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

          <div className="col-md-4">
          <DateSelector selectedDate={todo.date} onDateChange={DateChange} />
          </div>

          <div className="col-md-3">
            <TextField
              label="Description"
              variant="standard"
              name="desc" value={todo.desc}
              onChange={inputChanged}/>
           
         </div>

         <div className="col-md-3">
            <TextField
          label="low / medium / high"
          variant="standard"
              name="priority"
              value={todo.priority}
              onChange={inputChanged}
          
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