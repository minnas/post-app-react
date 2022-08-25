import {
  faBookAtlas,
  faHome,
  faCheck,
  faTimes,
  faLayerGroup,
  faPlusCircle,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEventHandler, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ApiType, search } from "../../api/api";
import Spinner from "../tools/Spinner";
import { add, RootState } from "./../../store/store";
import { MyTodo, Todo } from "../types/types";
import Button from "../tools/Button";
import {
  ButtonOptions,
  ButtonType,
  TooltipType,
  ToastType,
} from "../tools/settings";
import Toast from "../tools/Toast";
import "./home.scss";
import "./todos.scss";
import { useDispatch, useSelector } from "react-redux";
import Tooltip from "../tools/Tooltip";

const Todos = () => {
  const [todos, setTodos] = useState([] as Todo[]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastErrorVisible, setToastErrorVisible] = useState(false);
  const dispatch = useDispatch();
  const myTodos = useSelector((state: RootState) => state.todos);

  useEffect(() => {
    setLoading(true);
    search(ApiType.TODOS)
      .then((items) => {
        setTodos(items as Todo[]);
        setCount(items.length);
        setLoading(false);
      })
      .catch((e) => {
        console.log("Error while fetching todos, cause " + e);
        setLoading(false);
        setToastErrorVisible(true);
        setTimeout(() => {
          setToastErrorVisible(false);
        }, 1500);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const copyToMyTodos: MouseEventHandler = (event) => {
    const btn = event.currentTarget as HTMLButtonElement;
    const id = btn.id;
    const todo = todos.find((t) => t.id.toString() === id.toString());
    if (todo) {
      dispatch(
        add({
          externalId: id,
          id: myTodos.length,
          title: todo.title,
        } as MyTodo)
      );
      setToastVisible(true);
      setTimeout(() => {
        setToastVisible(false);
      }, 500);
    }
  };

  const copyDisabled = (id: string) => {
    return (
      myTodos.find((t: MyTodo) => t.externalId === id.toString()) != undefined
    );
  };

  const btnOptions = {
    padding: "0",
    margin: "0",
  } as ButtonOptions;

  const tooltip = "You can copy todo to own Todos by clicking plus button";

  return (
    <>
      <div className="todos-toolbar">
        <h1>Some Awesome Todos.</h1>
        <FontAwesomeIcon icon={faBookAtlas} size="lg" />
      </div>
      <div className="todo-list-header-container">
        <h3 className="todo-list-header">Current {count} todos in the list</h3>
        <Tooltip
          type={TooltipType.RIGHT}
          label={<FontAwesomeIcon icon={faLightbulb} size="lg" />}
          content={tooltip}
        ></Tooltip>
      </div>
      {toastVisible ? <Toast content="Todo copied to my todos" /> : ""}
      {toastErrorVisible ? <Toast content="Could now fetch todos" type={ToastType.ERROR}/> : ""}
      <div className="awesome-todo-list">
        {loading ? (
          <div className="todo-item-container todos-loading">
            <Spinner />
          </div>
        ) : (
          todos.map((todo: Todo) => (
            <div
              className="todo-item-container"
              key={todos.indexOf(todo).toString()}
            >
              <div className="todo-number">
                {todos.indexOf(todo).toString()}
              </div>
              <div className="todo-title">{todo.title}</div>
              <div className="todo-title completed">
                {todo.completed ? (
                  <FontAwesomeIcon icon={faCheck} />
                ) : (
                  <FontAwesomeIcon icon={faTimes} />
                )}
                <Button
                  id={todo.id as string}
                  icon={faPlusCircle}
                  type={ButtonType.ICON_ONLY}
                  label="copy"
                  disabled={copyDisabled(todo.id as string)}
                  onClick={copyToMyTodos}
                  options={btnOptions}
                />
              </div>
            </div>
          ))
        )}
      </div>
      <div className="footer todos-footer">
        <NavLink className="footer-link home-link" to="/">
          <FontAwesomeIcon icon={faHome} size="lg" />
          Back to Home
        </NavLink>
        <NavLink className="footer-link home-link" to="/my-todos">
          <FontAwesomeIcon icon={faLayerGroup} size="lg" />
          My Todos
        </NavLink>
      </div>
    </>
  );
};

export default Todos;
