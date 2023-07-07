import React from 'react';
import Top from './components/Main';
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';


export default function App() {
  return (

  <div className='container'>
    <div className='row'>
      <div className="col-sm-6 mx-auto">
        <div>
          <Router>
            <Routes>
              <Route path="/" element={<Top />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
</div>

  );
}
