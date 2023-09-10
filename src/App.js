import logo from './platzi.webp';
import React from 'react';
import './App.css';
import TodoCounter from './TodoCounter';
import TodoBusquda from './TodoBusquda';
import TodoListas from './TodoListas';
import TodoItem from './TodoItem';
import CreatTodos from './CreatTodos'
let comp = 0;
const defaulTodo = [
  {text: 'Cortar 1',complet: true},
  {text: 'Cortar 2',complet: true},
  {text: 'Cortar 3',complet: false},
  {text: 'Cortar 4',complet: true},
  {text: 'Cortar 5',complet: false},
  {text: 'Cortar 6',complet: true},
  {text: 'Cortar 7',complet: true},
  {text: 'Cortar 8',complet: true},
  {text: 'Cortar 9',complet: true},
  {text: 'Xortar 9',complet: true},
  {text: 'Jortar 9',complet: true},


];
function App() {
  //comp = defaulTodo.filter((tareacompleta)=> tareacompleta.complet == true );
  //Definición de estados 

  const [searchvalue,setSearchvalue] = React.useState('');
  //      console.log('El dato de busqueda es '+ searchvalue);
  const [datos,setDatos] = React.useState(defaulTodo) 
  const comp = datos.filter((tareacompleta)=> tareacompleta.complet == true ).length;
  const buqueda = datos.filter((busca)=> { 
    const todoText = busca.text.toLowerCase();
    const serchText = searchvalue.toLocaleLowerCase(); 
    return todoText.includes(serchText);})
    //console.log(buqueda)
  //Terminar definición de estados 
  const completeTodo = (text)=>{
    const newTodos = [...datos];
    //console.log(text)
    const todoIndex = newTodos.findIndex((todo)=> todo.text == text);
    //console.log(todoIndex)
    newTodos[todoIndex].complet = true;
    //console.log(newTodos)
    setDatos(newTodos);
  }

  const completeTodoDelete = (text)=>{
    const newTodos = [...datos];
    //console.log(text)
    const todoIndex = newTodos.findIndex((todo)=> todo.text == text);
    //console.log(todoIndex)
    newTodos.splice(todoIndex,1);
    //console.log(newTodos)
    setDatos(newTodos);
  }
     return (
  
  <React.Fragment>
      <TodoCounter complet={comp} total={datos.length}/>
      <TodoBusquda
        searchvalue ={searchvalue}
        setSearchvalue={setSearchvalue}
      />
      <TodoListas>
      {buqueda.map(todo =>
          <TodoItem key={todo.text} tarea={todo.text} completada = {todo.complet} 
            //encapsulamos la funcion completeTodo
            onComplete = {()=>{completeTodo(todo.text)}}
            onCompleteDelete = {()=>{completeTodoDelete(todo.text)}}
          />
        )} 
      </TodoListas>
      <CreatTodos/>
    
    </React.Fragment>
  );
 
}

export default App;
