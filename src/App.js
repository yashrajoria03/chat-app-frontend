import React from "react";

import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
      </>
    </Router>
  );
};

export default App;
