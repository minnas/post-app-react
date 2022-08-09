import { MouseEventHandler, useState } from "react";
import "./App.css";
/*import {
  faCheckCircle,
  faExclamationCircle,
  faInfo, faTimes, faLevelUp, faBookAtlas
} from "@fortawesome/free-solid-svg-icons";*/
//import Button from "./components/tools/Button";
//import { ButtonDefaults, ButtonType } from "./components/tools/settings";
import Home from "./components/views/Home"
import './custom.scss';

const App = (): JSX.Element => {
  return (
    <Home/>
  );
};

export default App;