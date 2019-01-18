import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import DM from "./pages/DM";
import Monster from "./pages/Monsters";
import Spell from "./pages/Spells";
import Generators from "./pages/Generators";
import Inn from "./pages/Inn";
import Land from "./pages/Land";
import Dungeon from "./pages/Dungeon";
import Treasure from "./pages/Treasure";
import Name from "./pages/Name";
import AdvCharacter from "./pages/AdvCharacter";
import NPC from "./pages/NPC";
import Sheet from "./pages/CharacterSheets";
import Character from "./pages/Character";
import Features from "./pages/Features";
import Classes from "./pages/Classes";


const App = () => (
  <Router>
    <div>

      <Route exact path="/" component={About} />
      <Route path="/dm" component={DM} />
      <Route path="/monster" component={Monster} />
      <Route path="/spell" component={Spell} />
      <Route path="/Generators" component={Generators} />
      <Route path="/inn" component={Inn} />
      <Route path="/land" component={Land} />
      <Route path="/dungeon" component={Dungeon} />
      <Route path="/treasure" component={Treasure} />
      <Route path="/name" component={Name} />
      <Route path="/advcharacter" component={AdvCharacter} />
      <Route path="/npc" component={NPC} />
      <Route path="/sheet" component={Sheet} />
      <Route path="/character" component={Character} />
      <Route path="/features" component={Features} />
      <Route path="/classes" component={Classes} />

    </div>
  </Router>
);

export default App;
