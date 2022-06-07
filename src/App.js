import { Route, Routes } from "react-router-dom";

import './App.css';
import Home from "./Page/Home";
import LayOut from "./Page/LayOut";
import About from "./Page/About";
import Board from "./Page/Board";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/board" element={<Board />}></Route>
        
        </Route>
      </Routes>

    </div>
  );
}

export default App;
