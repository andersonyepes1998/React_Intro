import React from "react";
import { AppUI } from "./AppUI";
 
import '../App/App.css';

/*const defaultTodos = [
  { text: 'Compra de hojas al por mayor.', completed: false},
  { text: 'Compra de hojas al detal.', completed: false},
  { text: 'Compra de hojas en promoción.', completed: false}
]
*/

function App() {

  const localStorageTodos = localStorage.getItem('TODOS_V1');

    let parsedTodo;

    //! CON ESTE SIGNO DE ADMIRACION PODEMOS DEFINIR LO SIGUIENTE:
    // SI ES NULL, UNDEFIEND, FALSE O UN STRING VACIO.

    if (!localStorageTodos) {

      localStorage.setItem('TODOS_V1', JSON.stringify([]));
      parsedTodo=[];
      
    }else{
        parsedTodo = JSON.parse(localStorageTodos);
    }

    const [todos, setTodos] = React.useState(parsedTodo);
    const [search, setSearch] = React.useState('');

    const completedTodos = todos.filter(todo => todo.completed==true).length;//aqui estamos contanto cuantos todos hay relizados.
    const totalTodos = todos.length; //aqui estamos verificanto el total de todos.

    let searchTodos = [];

    if (!search.length >= 1){
      searchTodos = todos;
    }else{
      searchTodos = todos.filter(todo => {
          const todoText = todo.text.toLocaleLowerCase(); //Metodo para toLocaleLowerCase() poner todas las letras en minuscula.
          const searchText = search.toLocaleLowerCase();
          return todoText.includes(searchText);
      });
    }


    const saveTodos = (newTodos) => {
        const stringifyTodos = JSON.stringify(newTodos);
        localStorage.setItem('TODOS_V1', stringifyTodos);
        setTodos(newTodos);
    }

    const completeTodos = (text) =>{
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true; // de esta manera tambin se puede dejar
          saveTodos(newTodos);
    };

    const deleTodos = (text) =>{
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos];
      newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
  };

  return (
      <AppUI 

        totalTodos= {totalTodos}
        completedTodos = {completedTodos}
        search = {search}
        setSearch = {setSearch}
        searchTodos={searchTodos}
        completeTodos={completeTodos}
        deleTodos={deleTodos}
      
      />
  );
}

export default App;

