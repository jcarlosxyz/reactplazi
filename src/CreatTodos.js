import React from 'react';
import './CreatTodos.css';
function CreatTodos(){

    return (

        <button className="CreateTodoButton" 
        onClick={(event)=>{
            console.log('Dando click');
            console.log(event);
        }
    }>+</button>

    );

}
export default CreatTodos;