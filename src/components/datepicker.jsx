
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import 'dayjs/locale/fi';


function DateSelector({ selectedDate, onDateChange }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}  adapterLocale="fi">
      <DatePicker
        value={selectedDate}
        onChange={onDateChange}
       
     
      />
    </LocalizationProvider>
  );
}

export default DateSelector;
