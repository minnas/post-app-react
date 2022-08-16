import { faHammer, faCloudMoonRain, faPlusSquare, faMinusSquare, faRefresh, faInfo, faHome, faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEventHandler } from "react";
import { NavLink } from "react-router-dom";
import Button from "../tools/Button";
import Tooltip from "../tools/Tooltip";
import { ButtonOptions, ButtonType, TooltipType } from "../tools/settings";
import  { increment, decrement, reset, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import Accordion from "../tools/Accordion";
import img from "./../../assets/birds.png";

import './home.scss';
import './tools.scss';

const Tools = () => {
  const count = useSelector((state:RootState) => state.count);
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

  const tooltip = "Some miscellaneous tools";

  return (
    <>
      <h1>Some Awesome Tools. <FontAwesomeIcon icon={faHammer} size="lg"/></h1>
      <div className="about-info">
        <span>About</span>
        <Tooltip type={TooltipType.RIGHT} label={<FontAwesomeIcon icon={faInfo} size="lg"/>} content={tooltip}></Tooltip>
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
      <div className="awesome-image">
        <Accordion label="Some birds flying" content={<img src={img} alt="birds"/>}/>
      </div>
      <div className="footer">
        <NavLink className="footer-link todo-link" to="/my-todos">
            <FontAwesomeIcon icon={faNoteSticky} size="lg"/>
              Back to My Todos
        </NavLink>
        <NavLink className="footer-link todo-link" to="/">
          <FontAwesomeIcon icon={faHome} size="lg"/>
            Goto Home
        </NavLink>
      </div>
    </>
  );
}

export default Tools;