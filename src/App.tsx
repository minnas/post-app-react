import { useState } from "react";
import "./App.css";
import {
  faCheckCircle,
  faExclamationCircle,
  faInfo, faTimes, faLevelUp
} from "@fortawesome/free-solid-svg-icons";
import Button from "./components/tools/Button";
import { ButtonDefaults } from "./components/tools/settings";
import './custom.scss';

const App = (): JSX.Element => {
  const [clickedButton, setClickedButton] = useState('');

  const clickMe = (e:MouseEvent) => {
    e.preventDefault();
    const btn = e.currentTarget as HTMLButtonElement;
    if(!btn.getAttribute("pressed")) {
      btn.style.color = "blue";
      btn.setAttribute("pressed", "pressed");
      btn.classList.add("pressed-darkmode");
      return false;
    } 
    btn.style.color = ButtonDefaults.COLOR;
    btn.removeAttribute("pressed");
    btn.classList.remove("pressed-darkmode");
  };
  return (
    <div className="container">
      <h1>Some Awesome Buttons.</h1>
      <div className="awesome-button-list">
        <Button label="profi" onClick={clickMe} icon={faLevelUp}/>
        <Button label="check" onClick={clickMe} icon={faCheckCircle}/>
        <Button label="alarm" onClick={clickMe} icon={faExclamationCircle}/>
        <Button label="info" onClick={clickMe} icon={faInfo}/>
        <Button label="times" onClick={clickMe} icon={faTimes}/>
      </div>
    </div>
  );
};

export default App;