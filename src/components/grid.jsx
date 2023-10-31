import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { useRef } from "react";
import dayjs from 'dayjs';

function Grid(props) {
  const gridRef = useRef(); // gridRef:llä on yksi current property

  const dateFormatter = (props) => {
    return dayjs(props.value).format('DD.MM.YYYY');
  };

  // columns
  const columns = [
    { headerName: 'Date', field: 'date', sortable: true, filter: true, floatingFilter: true, valueFormatter: dateFormatter },
    { headerName: 'Description', field: 'desc', sortable: true, filter: true, floatingFilter: true },
    {
      headerName: 'Priority',
      field: 'priority',
      sortable: true,
      filter: true,
      floatingFilter: true,
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

  const deleteSelected = () => {
    if (gridRef.current.getSelectedNodes().length === 0) { // joku rivi tai rivit valittu
      alert('Valitse rivi ensin!');
    } else {
      // kutsutaan vanhempikomponentin deleteByIndex-funtiota, jotta saadaan datat
      const removeIndex = parseInt(gridRef.current.getSelectedNodes()[0].id);
      props.deleteByIndex(removeIndex);
    }
  };

  const clear = () => {
  
    props.clearTodos();
  };

  return (
    <>
      <div className="ag-theme-material" style={{ height: '400px', width: 'auto', margin: 'auto' }}>
        
        <AgGridReact
        
          rowData={props.data}
          columnDefs={columns}
          rowSelection="single"
          animateRows={true}
          onGridReady={props => gridRef.current = props.api}
          
        />
         <button className="button2" onClick={deleteSelected}>
         <span class="material-symbols-outlined">heart_minus</span><br />Delete
      </button>
 

        <button className="button2" onClick={clear}><span class="material-symbols-outlined">delete_sweep</span><br /> Clear all
        </button>
 
      </div>
    </>
  );
}

export default Grid;
