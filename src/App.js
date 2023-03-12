import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<News key="genera1" apiKey={this.apiKey} pageSize={this.pageSize} country="us" category="general" />}></Route>
            <Route exact path="general" element={<News key="general" apiKey={this.apiKey} pageSize={this.pageSize} country="us" category="general" />}></Route>
            <Route exact path="/buisness" element={<News key="business" apiKey={this.apiKey} pageSize={this.pageSize} country="us" category="business" />}></Route>
            <Route exact path="/entertainment" element={<News key="entertainment" apiKey={this.apiKey} pageSize={this.pageSize} country="us" category="entertainment" />}></Route>
            <Route exact path="/health" element={<News key="health" apiKey={this.apiKey} pageSize={this.pageSize} country="us" category="health" />}></Route>
            <Route exact path="/science" element={<News key="science" apiKey={this.apiKey} pageSize={this.pageSize} country="us" category="science" />}></Route>
            <Route exact path="/sports" element={<News key="sports" apiKey={this.apiKey} pageSize={this.pageSize} country="us" category="sports" />}></Route>
            <Route exact path="/technology " element={<News key="technology" apiKey={this.apiKey} pageSize={this.pageSize} country="us" category="technology" />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}


