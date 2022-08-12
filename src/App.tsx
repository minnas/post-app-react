import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/views/Home"
import Todos from "./components/views/Todos";
import './custom.scss';
import MyTodos from "./components/views/MyTodos";
import store from "./store/store";
import { Provider } from "react-redux";

const App = (): JSX.Element => {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/my-todos" element={<MyTodos />} />
        </Routes>
      </Provider>
    </Router>  
  );
};

export default App;