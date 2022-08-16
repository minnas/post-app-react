import { faBookAtlas, faCheckCircle, faExclamationCircle, faInfo, faLevelUp, faTimes, 
        faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEventHandler } from "react";
import { NavLink } from "react-router-dom";
import Button from "../tools/Button";
import Tooltip from "../tools/Tooltip";
import { ButtonDefaults, ButtonType, TooltipType } from "../tools/settings";
import './home.scss';

const Home = () => {
    /**awesome buttons */
    const clickMe: MouseEventHandler = (event) => {
      event.preventDefault();
      const btn = event.currentTarget as HTMLButtonElement;
    
      if(!btn.getAttribute("pressed")) {
        btn.style.color = ButtonDefaults.SELECTED;
        btn.setAttribute("pressed", "pressed");
        btn.classList.add("pressed-darkmode");
        return false;
      } 
    
      btn.style.color = ButtonDefaults.COLOR;
      btn.removeAttribute("pressed");
      btn.classList.remove("pressed-darkmode");
    };  

    const tooltip = "These are dummy buttons which do nothing really";

    return (
      <>
        <h1>Some Awesome Buttons.</h1>
        <div className="about-info">
          <span>About the Buttons</span>
          <Tooltip type={TooltipType.RIGHT} label={<FontAwesomeIcon icon={faInfo} size="lg"/>} content={tooltip}></Tooltip>
        </div>
        <div className="awesome-button-list">
          <Button label="profi" onClick={clickMe} icon={faLevelUp}/>
          <Button label="check" onClick={clickMe} icon={faCheckCircle}/>
          <Button label="alarm" onClick={clickMe} icon={faExclamationCircle}/>
          <Button label="info" onClick={clickMe} icon={faInfo}/>
        </div>
        <div className="awesome-button-list">
          <Button label="times" onClick={clickMe} icon={faTimes}/>
          <Button label="no icon" onClick={clickMe}/>
          <Button label="only icon" onClick={clickMe} icon={faBookAtlas} type={ButtonType.ICON_ONLY}/>
        </div>
        <div className="footer">
          <NavLink className="footer-link todo-link" to="/todos">
            <FontAwesomeIcon icon={faNoteSticky} size="lg"/>
              Goto Todos
          </NavLink>
        </div>
      </>
    );
}

export default Home;