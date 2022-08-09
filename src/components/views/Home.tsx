import { faBookAtlas, faCheckCircle, faExclamationCircle, faInfo, faLevelUp, faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { MouseEventHandler } from "react";
import Button from "../tools/Button";
import { ButtonDefaults, ButtonType } from "../tools/settings";
import './home.scss';

interface Props {

}

const Home: React.FC<Props> = ({ 
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

    return (
      <div>
        <div className="content">
          <div className="content-inner">
            <h1>Some Awesome Buttons.</h1>
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
          </div>
        </div>
      </div>
    );
}

export default Home;