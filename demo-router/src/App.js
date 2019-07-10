import React from "react";
import  './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const TabOne = () => {
  return (
    <div className="tab tab1">Tab---1111</div>
  )
}

const Tabtwo = () => {
  return (
    <div className="tab tab2">Tab---2222</div>
  )
}

const Welcome = () => {
  return (
    <div className="tab">welcome!</div>
  )
}


function AppRouter() {
  return (
    <Router>
      <div >
        <nav>
          <button> <Link to="/tab1/">Tab1</Link> </button>
          <button> <Link to="/tab2/">Tab2</Link> </button>
        </nav>

        <Route path="/" exact component={Welcome} />
        <Route path="/tab1/" component={TabOne} />
        <Route path="/tab2/" component={Tabtwo} />
      </div>
    </Router>
  );
}

export default AppRouter;
