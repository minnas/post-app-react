import { faBookAtlas, faHome, faSpinner, faCheck, faTimes, faSnowflake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ApiType, search } from "../../api/api";
import { Todo } from "../types/types";
import { ViewProps } from "../types/view";
import './home.scss';
import './todos.scss';

const Todos: React.FC<ViewProps> = ({ 
  }) => {
    const [todos, setTodos] = useState([] as Todo[]);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
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
              loading ? <div><FontAwesomeIcon icon={faSpinner} size="lg"/></div> : todos.map((todo:Todo) => (
                <div className="todo-item-container" key={todos.indexOf(todo).toString()}>
                  <div className="todo-number">{todos.indexOf(todo).toString()}</div>
                  <div className="todo-title">
                    { todo.title }
                  </div>
                  <div className="todo-title completed">
                    { todo.completed  ? <FontAwesomeIcon icon={faCheck}/> : <FontAwesomeIcon icon={faTimes}/>}
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
                <FontAwesomeIcon icon={faHome} size="lg"/>
                  My Todos
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Todos;