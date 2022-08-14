import { faBookAtlas, faCheckCircle, faExclamationCircle, faInfo, faLevelUp, faTimes, 
        faNoteSticky, faCloudSun, faPlusSquare, faMinusSquare, faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { MouseEventHandler } from "react";
import { NavLink } from "react-router-dom";
import Button from "../tools/Button";
import Tooltip from "../tools/Tooltip";
import { ButtonDefaults, ButtonOptions, ButtonType, TooltipType } from "../tools/settings";
import { ViewProps } from "../types/view";
import  { increment, decrement, reset } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";

import './home.scss';

const Home: React.FC<ViewProps> = ({ 
  }) => {
    //@ts-ignore    
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
    /**counter */
    const clickPlus: MouseEventHandler = (event) => {
      dispatch(increment());
    }; 
    const clickMinus: MouseEventHandler = (event) => {
      dispatch(decrement());
    };
    const clickReset: MouseEventHandler = (event) => {
      dispatch(reset());
    };   
    const cBtnOptions = {
      padding: "0"
    } as ButtonOptions;

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
      <div>
        <div className="content">
        <span className="home-cloud-sun"><FontAwesomeIcon icon={faCloudSun} size="lg"/></span>
          <div className="content-inner">
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
            <div className="awesome-counter">
              <div className="awesome-counter-inner">
                <h2>Some Awesome Counter.</h2>
                <div className="counter-block">
                  <Button onClick={clickMinus} icon={faMinusSquare} type={ButtonType.ICON_ONLY} options={cBtnOptions}/>
                  <span className="current-value">{count}</span>
                  <Button onClick={clickPlus} icon={faPlusSquare} type={ButtonType.ICON_ONLY} options={cBtnOptions}/>
                </div>
                <div className="counter-block">
                  <span className="counter-reset-label">Reset</span>
                  <Button onClick={clickReset} icon={faRefresh} type={ButtonType.ICON_ONLY} options={cBtnOptions}/>
                </div>
              </div>
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