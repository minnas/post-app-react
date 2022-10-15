import {
  faLayerGroup,
  faTimes,
  faNoteSticky,
  faInfo,
  faTools,
  faBug,
  faBugSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FormEvent,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@store/store";
import { NavLink } from "react-router-dom";
import Button from "@tools/Button";
import {
  ButtonType,
  ButtonOptions,
  TooltipType,
  TooltipOptions,
} from "@tools/settings";
import { MyTodo } from "@dataTypes/types";
import "./styles/home.scss";
import "./styles/todos.scss";
import "./styles/mytodos.scss";
import Tooltip from "@tools/Tooltip";
import { add, remove, update } from "@store/dataSlices";

const MyTodos = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const aNewDummyTodo = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (null != aNewDummyTodo.current) {
      aNewDummyTodo.current.placeholder = "A new Dummy Todo";
    }
  }, [null !== aNewDummyTodo.current]);

  const toggleTodo = (id: string) => {
    const todo = todos.find((t: MyTodo) => t.id == id) as MyTodo;
    const clone = { ...todo };
    clone.completed = !todo.completed;
    dispatch(update(clone));
  };

  const setToggleTodoStatus: MouseEventHandler = (event) => {
    const btn = event.currentTarget as HTMLButtonElement;
    toggleTodo(btn.id);
    return false;
  };

  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const title = e.currentTarget.todoTitle.value;
    e.currentTarget.todoTitle.value = "";
    const id = todos.length;
    dispatch(add({ title, id } as MyTodo));
  };

  const removeTodo: MouseEventHandler = (event) => {
    const btn = event.currentTarget as HTMLButtonElement;
    const id = btn.id;
    dispatch(remove({ id }));
  };

  useEffect(() => {
    setCount(todos.length);
  }, [todos]);

  const btnOptions = {
    padding: "0",
    margin: "0",
  } as ButtonOptions;

  const tooltipOptions = {
    fillBgColorMode: true,
  } as TooltipOptions;

  const todoToggleIcon = (completed: boolean) => {
    if (completed) {
      return faBugSlash;
    }
    return faBug;
  };

  const tooltip = "Add todo also from last page";
  return (
    <>
      <div className="todos-toolbar">
        <h1>My Own Todos</h1>
        <FontAwesomeIcon icon={faLayerGroup} size="lg" />
        <Tooltip
          options={tooltipOptions}
          type={TooltipType.LEFT}
          label={<FontAwesomeIcon icon={faInfo} size="lg" />}
          content={tooltip}
        ></Tooltip>
      </div>
      <h3 className="todo-list-header">Current {count} todos in the list</h3>
      <div className="todo-input-area">
        <form onSubmit={addTodo}>
          <label htmlFor="todoTitle">
            Add new Todo and save it by pressing Enter
          </label>
          <input name="todoTitle" type="text" ref={aNewDummyTodo} />
        </form>
      </div>
      <div className="awesome-todo-list">
        {todos.map((todo: MyTodo) => (
          <div
            className="todo-item-container"
            key={todos.indexOf(todo).toString()}
          >
            <div className="todo-item-content-inner">
              <div className="todo-number">
                {todos.indexOf(todo).toString()}
              </div>
              <div className="todo-title">{todo.title}</div>
            </div>
            <div className="todo-title completed">
              <Button
                id={todo.id as string}
                type={ButtonType.ICON_ONLY}
                options={btnOptions}
                icon={todoToggleIcon(todo.completed)}
                onClick={setToggleTodoStatus}
              />
              <Button
                id={todo.id as string}
                type={ButtonType.ICON_ONLY}
                options={btnOptions}
                icon={faTimes}
                onClick={removeTodo}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="footer todos-footer">
        <NavLink className="footer-link home-link" to="/todos">
          <FontAwesomeIcon icon={faNoteSticky} size="lg" />
          Back to Todos
        </NavLink>
        <NavLink className="footer-link home-link" to="/tools">
          <FontAwesomeIcon icon={faTools} size="lg" />
          Goto to Tools
        </NavLink>
      </div>
    </>
  );
};

export default MyTodos;
