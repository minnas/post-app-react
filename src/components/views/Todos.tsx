import { faBookAtlas, faHome, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ApiType, search } from "../../api/api";
import { Todo } from "../types/types";
import { ViewProps } from "../types/view";
import './home.scss';
import './todos.scss';

const Home: React.FC<ViewProps> = ({ 
  }) => {
    const [todos, setTodos] = useState([] as Todo[]);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      try {
        setLoading(true);
        search(ApiType.TODOS)
          .then(items => {
            setTodos(items as Todo[]);
            setLoading(false);
        });
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    });
    return (
      <div>
        <div className="content">
          <div className="content-inner">
            <div className="todos-toolbar">
              <h1>Some Awesome Todos.</h1>
              <FontAwesomeIcon icon={faBookAtlas} size="lg"/>
            </div>
            <div className="awesome-todo-list">
            <h3>Current {count} todos in the list</h3>
            {
              loading ? <div><FontAwesomeIcon icon={faSpinner} size="lg"/></div> : todos.map((todo:Todo) => (
                <div className="todo-item-container" key={todos.indexOf(todo).toString()}>
                  <div>{todos.indexOf(todo).toString()}</div>
                  <div className="todo-title">
                    { todo.title }
                  </div>
                  <div className="todo-title">
                    Ready? { todo.completed }
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
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home;