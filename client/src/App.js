import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'

// importing components
import Join from "./Components/Join/Join"
import Chat from "./Components/Chat/Chat"
const App =()=>(
  <Router>
    <Route path="/" exact component={Join} />
    <Route path="/chat" component={Chat} />
  </Router>
)

export default App;