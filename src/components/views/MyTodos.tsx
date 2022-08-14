import { faHome, faLayerGroup, faCheck, faCheckCircle, faTimes, faSnowman, faNoteSticky, faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FormEvent, MouseEventHandler, useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { add, update, remove } from './../../store/store';
import { NavLink } from "react-router-dom";
import Button from "../tools/Button";
import { ButtonType, ButtonOptions, TooltipType, TooltipOptions } from "../tools/settings";
import { MyTodo } from "../types/types";
import { ViewProps } from "../types/view";
import './home.scss';
import './todos.scss';
import './mytodos.scss';
import Tooltip from "../tools/Tooltip";

const MyTodos: React.FC<ViewProps> = ({ 
  }) => {
    //@ts-ignore
    const todos = useSelector((state) => state.todos as MyTodo[]);
    const dispatch = useDispatch();    
    const [count, setCount] = useState(0);

    const completeTodo = (id: number) => {
      const title = (todos.find((t:MyTodo) => t.id == id) as MyTodo)?.title;
      const completed = true;
      dispatch(update({id, title, completed}));
    };    

    const setTodoDone: MouseEventHandler = (event) => {
      const btn = event.currentTarget as HTMLButtonElement;
      completeTodo(Number.parseInt(btn.id));
      return false;
    };  
    
    const addTodo = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(e.currentTarget);
      const title = e.currentTarget.todoTitle.value;
      e.currentTarget.todoTitle.value = '';
      const id = todos.length;
      dispatch(add({title, id} as MyTodo));
    }
    const removeTodo: MouseEventHandler = (event) => {
      const btn = event.currentTarget as HTMLButtonElement;
      const id = btn.id;      
      dispatch(remove({id}));
    };  
    
    useEffect(() => {
      setCount(todos.length);
      }, [todos]);

    const btnOptions = {
      padding: "0",
      margin: "0"
    } as ButtonOptions;

    const tooltipOptions = {
      fillBgColorMode: true
    } as TooltipOptions;

    const tooltip = "Add todo also from last page";  
    return (
      <div>
        <div className="content">
          <span className="todos-show-flake"><FontAwesomeIcon icon={faSnowman} size="lg"/></span>
          <div className="content-inner">
            <div className="todos-toolbar">
              <h1>My Own Todos</h1>
              <FontAwesomeIcon icon={faLayerGroup} size="lg"/>
              <Tooltip options={tooltipOptions} type={TooltipType.LEFT} label={<FontAwesomeIcon icon={faInfo} size="lg"/>} content={tooltip}></Tooltip>
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
                      <Button id={todo.id as string} type={ButtonType.ICON_ONLY} options={btnOptions} icon={faTimes} onClick={removeTodo}/>
                  </div>
                </div>
              ))
            }
            </div>
            <div className="footer todos-footer">
              <NavLink className="footer-link home-link" to="/todos">
                <FontAwesomeIcon icon={faNoteSticky} size="lg"/>
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