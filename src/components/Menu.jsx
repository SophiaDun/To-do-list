import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Todolist from '../components/Todolist';
import Home from '../components/Home';
import HomeIcon from '@mui/icons-material/Home';
import DrawIcon from '@mui/icons-material/Draw';
import Logo from '../kuvat/logo.png'


function TabApp() {
  const [value, setValue] = useState('one');

  const handleChange = (event, value) => {
    setValue(value);
  };

  return (
    <div>
       <div className='banner'>
  <img src={Logo}alt="logo"/>
    
       </div>
      <Tabs  textColor="primary:"
        indicatorColor="primary:" value={value} onChange={handleChange}  centered>
        <Tab icon={<HomeIcon />}value='one' label="Home" > </Tab>
       
        <Tab icon={<DrawIcon />}value='two' label="Todo" > </Tab>
      </Tabs>
    
      {value === 'one' && <div><Home/></div>}
      {value === 'two' && <div><Todolist/></div>}
   
    </div>
  
  );
}

export default TabApp;
