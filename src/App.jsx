import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route />
        </Routes>
      </Router>
    </>
  );
}

export default App;
