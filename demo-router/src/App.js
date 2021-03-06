import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Topics from './components/Topics';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  );
}

export default App;