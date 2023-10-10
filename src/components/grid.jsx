import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { useRef } from "react";

function Grid(props){

    //stateless
    
    //gridRef
    
    const gridRef= useRef(); //gridRef:llä on yksi current property
    
    //colums
    const columns = [
        { headerName: 'Date', field: 'date', sortable: true, filter: true ,floatingFilter:true},
        { headerName: 'Description', field: 'desc', sortable: true, filter: true ,floatingFilter:true},
        { 
            headerName: 'Priority', 
            field: 'priority', 
            sortable: true, 
            filter: true,
            floatingFilter:true,
            cellStyle: params => {
              const lowerCaseValue = params.value.toLowerCase();
              let color = 'black';
        
              if (lowerCaseValue === 'high') {
                color = 'red';
              } else if (lowerCaseValue === 'medium') {
                color = 'orange';
              } else if (lowerCaseValue === 'low') {
                color = 'green';
              }
        
              return { color };
            }
          }
      ];
      
    
    const deleteSelected =()=>{
        if(gridRef.current.getSelectedNodes().length==0){ //joku rivi tai rivit valittu
            alert('valitse rivi ensin!');
        }
        else{
            //kutsutaan vanhempikomponentin deleteByIndex-funtiota,jotta saadaan datat
           const removeIndex = parseInt(gridRef.current.getSelectedNodes()[0].id);
            props.deleteByIndex(removeIndex);
        }
    };
    // return
    
    return(
    <>

    <div className="ag-theme-material"
    
    style={{height: '500px', width: '100%', margin: 'auto'}} >
         
    <AgGridReact 
    
    rowData={props.data} 
    columnDefs={columns}
    rowSelection="single"
    animateRows="true"
    onGridReady={params => gridRef.current = params.api}
    >
    
    </AgGridReact>
    <button className="button" onClick={deleteSelected}><span className="material-symbols-outlined">delete
           </span></button>
    </div>
    
    
    
    </>
    );
    
    }
    export default Grid;