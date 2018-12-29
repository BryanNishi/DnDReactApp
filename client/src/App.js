import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import DM from "./pages/DM";
import Monster from "./pages/Monsters";
import Spell from "./pages/Spells";
import Generators from "./pages/Generators";
import AdvCharacter from "./pages/AdvCharacter";
import Guided from "./pages/BasicCharacter";
import NPC from "./pages/NPC";
import Sheet from "./pages/CharacterSheets";


class App extends Component {  

  render() {
    return (
      <Router>
        <div>

          <Route exact path="/" component={About} />
          <Route path="/dm" component={DM} />
          <Route path="/monster" component={Monster} />
          <Route path="/spell" component={Spell} />
          <Route path="/generators" component={Generators} />
          <Route path="/advcharacter" component={AdvCharacter} />
          <Route path="/guidedcharacter" component={Guided} />
          <Route path="/npc" component={NPC} />
          <Route path="/sheet" component={Sheet} />          

        </div>
      </Router>
    );
  }
}

export default App;
