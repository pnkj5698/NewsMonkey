import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App =()=> {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<News key="genera1" apiKey={apiKey} pageSize={pageSize} country="us" category="general" />}></Route>
            <Route exact path="general" element={<News key="general" apiKey={apiKey} pageSize={pageSize} country="us" category="general" />}></Route>
            <Route exact path="/buisness" element={<News key="business" apiKey={apiKey} pageSize={pageSize} country="us" category="business" />}></Route>
            <Route exact path="/entertainment" element={<News key="entertainment" apiKey={apiKey} pageSize={pageSize} country="us" category="entertainment" />}></Route>
            <Route exact path="/health" element={<News key="health" apiKey={apiKey} pageSize={pageSize} country="us" category="health" />}></Route>
            <Route exact path="/science" element={<News key="science" apiKey={apiKey} pageSize={pageSize} country="us" category="science" />}></Route>
            <Route exact path="/sports" element={<News key="sports" apiKey={apiKey} pageSize={pageSize} country="us" category="sports" />}></Route>
            <Route exact path="/technology " element={<News key="technology" apiKey={apiKey} pageSize={pageSize} country="us" category="technology" />}></Route>
          </Routes>
        </Router>
      </div>
    )
}

export default App;


