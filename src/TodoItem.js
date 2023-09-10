import React from 'react';
import { BiSolidMessageSquareX } from "react-icons/bi";
import { LiaCheckSolid } from "react-icons/lia";
import { MdDownloadDone } from "react-icons/md";
import './TodoItem.css'

function changeBackground(e) {
  e.target.style.background = 'red';
}
function changeBackground1(e) {
  e.target.style.background = 'white';
}
function TodoItem({tarea,completada,onComplete,onCompleteDelete}){


    return (
      <li className="TodoItem">
        <span className={`Icon Icon-check ${completada ? "Icon-check--active":"Icon-check--off" }`}
        onClick={onComplete}
        //onMouseOver={changeBackground}
        //onMouseOut={changeBackground1}
       // ononHover={hola()}
      // onMouseOver={hola()}
       ><MdDownloadDone /></span>
        <p className={`TodoItem-p ${completada&&"TodoItem-p--complete"}`}>{tarea}  
         </p>
        <span className="Icon Icon-delete" 
          onClick={onCompleteDelete}
        ><BiSolidMessageSquareX /></span>
      </li>
  
     
    );
  
  }

  export default TodoItem;



  /*
        <span className={`Icon Icon-check ${completada&&"Icon-check--active"}`}




  */