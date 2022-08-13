import { faBookAtlas, faCheckCircle, faExclamationCircle, faInfo, faLevelUp, faTimes, faNoteSticky, faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { MouseEventHandler } from "react";
import { NavLink } from "react-router-dom";
import Button from "../tools/Button";
import Tooltip from "../tools/Tooltip";
import { ButtonDefaults, ButtonType, TooltipType } from "../tools/settings";
import { ViewProps } from "../types/view";
import './home.scss';

const Home: React.FC<ViewProps> = ({ 
  }) => {

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

    const tooltip = "There are dummy buttons which do nothing (except changes color + size)";

    return (
      <div>
        <div className="content">
        <span className="home-cloud-sun"><FontAwesomeIcon icon={faCloudSun} size="lg"/></span>
          <div className="content-inner">
            <h1>Some Awesome Buttons.</h1>
            <div className="about-info">
              <span>About the App</span>
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
          </div>
          <span className="some-test">Minna.</span>
        </div>
      </div>
    );
}

export default Home;