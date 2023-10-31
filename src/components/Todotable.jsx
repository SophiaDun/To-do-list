
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
          

         </tr>
         
       ))}
       
     </tbody>
   </table>
</>
    );
}
export default Todotable;