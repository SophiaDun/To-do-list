import React from "react";
import './App.css';

function Todotable (props){

    return(
<>
<table className="table">
     
     <tbody>
    <tr>
     <th>Date</th>
     <th>Description</th>
    </tr>
       {props.todos.map((todo, index) => (
        
         <tr key={index}>
        
         
           <td>{todo.date}</td>
           <td>{todo.desc}</td>
           <td><button onClick={() => props.onDelete(index)}className="btn"type="button" value="-" ><span className="material-symbols-outlined">delete
           </span></button></td>
         </tr>
         
       ))}
       
     </tbody>
   </table>
</>
    );
}
export default Todotable;