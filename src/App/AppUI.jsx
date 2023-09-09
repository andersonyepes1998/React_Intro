import React from "react";
import { TodoConunter } from '../TodoConunter/index.jsx';
import { TodoBuscador } from '../TodoBuscador/index.jsx';
import { TodoList } from "../TodoList/index.jsx";
import { CreateButton } from '../CreateButton/index.jsx'
import { TodoItem } from "../TodoItem/index.jsx";
import { Header } from '../Header/index.jsx';




function AppUI({

        totalTodos,
        completedTodos,
        search,
        setSearch,
        searchTodos,
        completeTodos,
        deleTodos,

}) 

{
    return(
        <>
    <Header/>
      <TodoConunter
        total= {totalTodos}
        completed = {completedTodos}
      />
     
      <TodoBuscador 
        search = {search}
        setSearch = {setSearch}
      />
      
      <TodoList>
        {searchTodos.map(todo => (
        <TodoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onCompleted = {() => completeTodos(todo.text)} 
          ondele = {() => deleTodos(todo.text)} 
        />
        ))}
      </TodoList>


      <CreateButton/>

    </>
    )
}

export {AppUI} ;