import { faHome, faLayerGroup, faCheck, faCheckCircle, faTimes, faSnowman } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FormEvent, MouseEventHandler, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../tools/Button";
import { ButtonType, ButtonOptions } from "../tools/settings";
import { MyTodo } from "../types/types";
import { ViewProps } from "../types/view";
import './home.scss';
import './todos.scss';
import './mytodos.scss';

const MyTodos: React.FC<ViewProps> = ({ 
  }) => {
    const [todos, setTodos] = useState([] as MyTodo[]);
    const [count, setCount] = useState(0);

    const removeTodo = (id: number) => {
      setTodos((prev) => prev.filter(t => t.id != id));
    };

    const completeTodo = (id: number) => {
      const newState = todos.map(todo => {
        if (todo.id === id) {
          return {
              id, 
              title: todo.title, 
              completed: true};
        }
        return todo;
      });  
      setTodos(newState);
    };    

    const setTodoDone: MouseEventHandler = (event) => {
      event.preventDefault();
      const btn = event.currentTarget as HTMLButtonElement;
      completeTodo(Number.parseInt(btn.id));
    };  

    const addTodo = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(e.currentTarget);
      const title = e.currentTarget.todoTitle.value;
      e.currentTarget.todoTitle.value = '';
      const id = todos.length;
      setTodos((prev) => [...prev,  {title, id} as MyTodo])
    }
    
    useEffect(() => {
      setCount(todos.length);
      }, [todos]);

    const btnOptions = {
      padding: "0",
      margin: "0"
    } as ButtonOptions;

    return (
      <div>
        <div className="content">
          <span className="todos-show-flake"><FontAwesomeIcon icon={faSnowman} size="lg"/></span>
          <div className="content-inner">
            <div className="todos-toolbar">
              <h1>My Own Todos</h1>
              <FontAwesomeIcon icon={faLayerGroup} size="lg"/>
            </div>
            <h3 className="todo-list-header">Current {count} todos in the list</h3>
            <div className="todo-input-area">
              <form onSubmit={addTodo}>
              <label htmlFor="todoTitle">Add new Todo and save it by pressing Enter</label>
                <input name="todoTitle" type="text"/>
              </form>
            </div>
            <div className="awesome-todo-list">
            {
              todos.map((todo:MyTodo) => (
                <div className="todo-item-container" key={todos.indexOf(todo).toString()}>
                  <div className="todo-item-content-inner">
                    <div className="todo-number">{todos.indexOf(todo).toString()}</div>
                    <div className="todo-title">
                      { todo.title }
                    </div>
                  </div>  
                  <div className="todo-title completed">
                    { todo.completed  ? <FontAwesomeIcon icon={faCheck}/> : <Button id={todo.id as string} type={ButtonType.ICON_ONLY} options={btnOptions} icon={faCheckCircle} onClick={setTodoDone}/> }
                    <Button type={ButtonType.ICON_ONLY} options={btnOptions} icon={faTimes} onClick={() => {removeTodo(todo.id as number)}}/>
                  </div>
                </div>
              ))
            }
            </div>
            <div className="footer todos-footer">
              <NavLink className="footer-link home-link" to="/todos">
                <FontAwesomeIcon icon={faHome} size="lg"/>
                  Back to Todos
              </NavLink>
              <NavLink className="footer-link home-link" to="/">
                <FontAwesomeIcon icon={faHome} size="lg"/>
                  Goto to Home
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
}

export default MyTodos;