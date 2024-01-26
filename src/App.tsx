import "./App.css";
import NavBar from "./component/NavBar/NavBar";

import Skills from "./component/pages/Skills";
import { Route, Routes } from "react-router-dom";
import Landing from "./component/pages/Landing";
import Projects from "./component/pages/Projects";
import Contact from "./component/pages/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
