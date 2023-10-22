import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


import 'dayjs/locale/fi';


function DateSelector({ selectedDate, DateChange }) {
    
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}  adapterLocale="fi">
      <DatePicker
     
        value={selectedDate}
        onChange={DateChange}
     />
     
    </LocalizationProvider>
  );
}

export default DateSelector;
