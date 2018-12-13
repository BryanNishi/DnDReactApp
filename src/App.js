import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import DM from "./pages/DM";
import Monster from "./pages/Monster";
import Spell from "./pages/Spell";
import Generators from "./pages/Generators";
import Character from "./pages/Character";

const App = () => (
  <Router>
    <div>
      
        <Route exact path="/" component={About} />
        <Route path="/dm" component={DM} />
        <Route path="/monster" component={Monster} />
        <Route path="/spell" component={Spell} />
        <Route path="/generators" component={Generators} />
        <Route path="/character" component={Character} />
            
    </div>
  </Router>
);

export default App;
