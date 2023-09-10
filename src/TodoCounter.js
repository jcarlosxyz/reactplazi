import React from 'react';
import './TodoCounter.css'
function TodoCounter({total,complet}){
if (complet == total){
    
    return(
        <h1 className='TodoCounter'>
            Felicidades  completates  las  Tareas. 
        </h1>
    
     );

}else {
    return(
        <h1 className='TodoCounter'>
            Has completado {complet} de {total} Tareas. 
        </h1>
    
     );
    
}
 
}
export default TodoCounter;