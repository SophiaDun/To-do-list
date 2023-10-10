
function Todotable (props){

    return(
<>
<table className="table">
     
     <tbody>
    
       {props.todos.map((todo, index) => (
        
         <tr key={index}>
        
         
           <td>{todo.date}</td>
           <td>{todo.desc}</td>
           <td>{todo.priority}</td>
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