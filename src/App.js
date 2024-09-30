import "./App.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar"
import Main from "./components/pages/Main/Main"
import Footer from "./components/footer/Footer"

/* pages */
import Skills from "./components/pages/Skills/Skills"
import Contacts from "./components/pages/Contacts/Contacts"
import Projects from "./components/pages/Projects/Projects"
import Project from "./components/pages/Project"

function App() {
  return (
    <div className="App">
      <Router>
        < Navbar />
        <Routes>
            <Route path="/Home" element={<Main /> }/>
            <Route path="/Projects" element={<Projects />}/>
            <Route path="/Projects/:id" element={<Project />}/>
            <Route path="/Skills" element={<Skills />}/>
            <Route path="/Contacts" element={<Contacts /> }/>
        </Routes>
        < Footer />
      </Router>
    </div>
  );
};

export default App;