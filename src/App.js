import React, { useState } from "react";
import "./App.css";
import { Route, Switch, HashRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Wishes from "./pages/Wishes";
import Memos from "./pages/Memos";
import Presents from "./pages/Presents";
import ForYou from "./pages/ForYou";
import Menu from "./components/Menu";
import Spoiler from "./pages/Spoiler";
import MenuContext from "./context/MenuContext";

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <MenuContext.Provider
      value={{ selectedIndex, setSelectedIndex, handleListItemClick }}
    >
      <div className="App">
        <Router>
          <Menu />
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
          <Switch>
            <Route exact path="/home" component={HomePage} />
          </Switch>
          <Switch>
            <Route exact path="/wishes" component={Wishes} />
          </Switch>
          <Switch>
            <Route exact path="/memos" component={Memos} />
          </Switch>
          <Switch>
            <Route exact path="/presents" component={Presents} />
          </Switch>
          <Switch>
            <Route exact path="/foryou" component={ForYou} />
          </Switch>
          <Switch>
            <Route exact path="/spoiler" component={Spoiler} />
          </Switch>
        </Router>
      </div>
    </MenuContext.Provider>
  );
};

export default App;
