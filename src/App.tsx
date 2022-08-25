import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/views/Home";
import Todos from "./components/views/Todos";
import "./custom.scss";
import MyTodos from "./components/views/MyTodos";
import store from "./store/store";
import { Provider } from "react-redux";
import Tools from "./components/views/Tools";
import Layout from "./components/views/Layout";
import "./app.scss";
import {
  faCloudMoonRain,
  faCloudSun,
  faSnowflake,
  faSnowman,
} from "@fortawesome/free-solid-svg-icons";

const App = (): JSX.Element => {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                children={<Home />}
                icon={faCloudSun}
                showSignature={true}
              />
            }
          />
          <Route
            path="/todos"
            element={<Layout children={<Todos />} icon={faSnowflake} />}
          />
          <Route
            path="/my-todos"
            element={<Layout children={<MyTodos />} icon={faSnowman} />}
          />
          <Route
            path="/tools"
            element={
              <Layout
                children={<Tools />}
                icon={faCloudMoonRain}
                showSignature={true}
              />
            }
          />
        </Routes>
      </Provider>
    </Router>
  );
};

export default App;
