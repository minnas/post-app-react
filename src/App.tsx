import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/views/Home"
import Todos from "./components/views/Todos";
import './custom.scss';
import MyTodos from "./components/views/MyTodos";
import store from "./store/store";
import { Provider } from "react-redux";
import Tools from "./components/views/Tools";
import "./app.scss";
import Layout from "./components/views/Layout";

const App = (): JSX.Element => {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout children={<Home/>}/>} />
          <Route path="/todos" element={<Layout children={<Todos/>}/>} />
          <Route path="/my-todos" element={<Layout children={<MyTodos/>}/>} />
          <Route path="/tools" element={<Layout children={<Tools/>}/>} />
        </Routes>
      </Provider>
    </Router>  
  );
};

export default App;