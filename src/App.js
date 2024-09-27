import "./App.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar"
import Main from "./components/pages/Main/Main"
import Footer from "./components/footer/Footer"

/* pages */
import Skills from "./components/pages/Skills/Skills"
import Contacts from "./components/pages/Contacts/Contacts"

function App() {
  return (
    <div className="App">
      <Router>
        < Navbar />
        <Routes>
            <Route path="/Home" element={<Main /> }/>
            <Route path="/Skills" element={<Skills /> }/>
            <Route path="/Contacts" element={<Contacts /> }/>
        </Routes>
        < Footer />
      </Router>
    </div>
  );
};

export default App;