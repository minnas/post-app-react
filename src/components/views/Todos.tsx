import { faBookAtlas, faHome, faCheck, faTimes, faSnowflake, faLayerGroup, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { MouseEventHandler, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ApiType, search } from "../../api/api";
import Spinner from "../tools/Spinner";
import { add } from './../../store/store';
import { MyTodo, Todo } from "../types/types";
import { ViewProps } from "../types/view";
import Button from "../tools/Button";
import { ButtonOptions, ButtonType } from "../tools/settings";
import './home.scss';
import './todos.scss';
import { useDispatch, useSelector } from "react-redux";

const Todos: React.FC<ViewProps> = ({ 
  }) => {
    const [todos, setTodos] = useState([] as Todo[]);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    //@ts-ignore    
    const myTodos = useSelector((state) => state.todos);
    
    useEffect(() => {
      setLoading(true);
      search(ApiType.TODOS)
      .then(items => {
        setTodos(items as Todo[]);
        setCount(items.length);
        setLoading(false);  
      })
      .finally(() => {
        setLoading(false);
      });
    }, []);

    const copyToMyTodos: MouseEventHandler = (event) => {
      const btn = event.currentTarget as HTMLButtonElement;
      const id = btn.id;   
      const todo = todos.find(t => t.id.toString() === id.toString());   
      if(todo) {
        dispatch(add({ 
                  externalId : id, 
                  id: myTodos.length, 
                  title: todo.title 
                } as MyTodo));
      }
    };  

    const copyDisabled = (id:string) => {
      return myTodos.find((t:MyTodo) => t.externalId === id.toString()) != undefined;   
    };

    const btnOptions = {
      padding: "0",
      margin: "0"
    } as ButtonOptions;

    return (
      <div>
        <div className="content">
          <span className="todos-show-flake"><FontAwesomeIcon icon={faSnowflake} size="lg"/></span>
          <div className="content-inner">
            <div className="todos-toolbar">
              <h1>Some Awesome Todos.</h1>
              <FontAwesomeIcon icon={faBookAtlas} size="lg"/>
            </div>
            <h3 className="todo-list-header">Current {count} todos in the list</h3>
            <div className="awesome-todo-list">
            {
              loading ? <div className="todo-item-container todos-loading"><Spinner/></div> : todos.map((todo:Todo) => (
                <div className="todo-item-container" key={todos.indexOf(todo).toString()}>
                  <div className="todo-number">{todos.indexOf(todo).toString()}</div>
                  <div className="todo-title">
                    { todo.title }
                  </div>
                  <div className="todo-title completed">
                    { todo.completed  ? <FontAwesomeIcon icon={faCheck}/> : <FontAwesomeIcon icon={faTimes}/>}
                    <Button id={todo.id as string} icon={faPlusCircle} type={ButtonType.ICON_ONLY} label="copy" disabled={copyDisabled(todo.id as string)} onClick={copyToMyTodos} options={btnOptions}/>
                  </div>
                </div>
              ))
            }
            </div>
            <div className="footer todos-footer">
              <NavLink className="footer-link home-link" to="/">
                <FontAwesomeIcon icon={faHome} size="lg"/>
                  Back to Home
              </NavLink>
              <NavLink className="footer-link home-link" to="/my-todos">
                <FontAwesomeIcon icon={faLayerGroup} size="lg"/>
                  My Todos
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Todos;