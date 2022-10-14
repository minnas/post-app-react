import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@views/Home";
import Todos from "@views/Todos";
import "./custom.scss";
import MyTodos from "@views/MyTodos";
import store from "@store/store";
import { Provider } from "react-redux";
import Tools from "@views/Tools";
import Layout from "@views/Layout";
import "./app.scss";
import {
  faBugs,
  faCloudMoonRain,
  faCloudSun,
  faSnowflake,
  faSnowman,
  faMosquito,
} from "@fortawesome/free-solid-svg-icons";
import Posts from "@views/Posts";
import Bookmarks from "@views/Bookmarks";

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
          <Route
            path="/posts"
            element={<Layout children={<Posts />} icon={faMosquito} />}
          />
          <Route
            path="/bookmarks"
            element={<Layout children={<Bookmarks />} icon={faBugs} />}
          />
        </Routes>
      </Provider>
    </Router>
  );
};

export default App;
