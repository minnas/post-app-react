import { faBookAtlas, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
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
            </div>
            <div className="footer">
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