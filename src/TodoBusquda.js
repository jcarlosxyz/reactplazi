
import React from 'react';
import { IconName } from "react-icons/fa";
import './TodoBusquda.css'

function TodoBusquda({
    searchvalue,
    setSearchvalue,
}){
    
    //console.log('El dato de busqueda es '+ searchvalue);
    return(

        <input placeholder="Cortar cebolla" 
        className="TodoSearch"
        value={searchvalue}    
        onChange={(event)=>{
            setSearchvalue(event.target.value)
            
        }}/>
    );
}
export default TodoBusquda;