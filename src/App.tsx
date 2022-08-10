import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/views/Home"
import Todos from "./components/views/Todos";
import './custom.scss';
import MyTodos from "./components/views/MyTodos";

const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/my-todos" element={<MyTodos />} />
      </Routes>
    </Router>  
  );
};

export default App;