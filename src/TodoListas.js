import './TodoListas.css'
import React from 'react';

function  TodoListas (props){

    return(
        <ul className="TodoList">
            {props.children}
        </ul>
    );

}
export default TodoListas;
