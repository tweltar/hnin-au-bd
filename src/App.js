import "./App.css";
import { Route, Switch, HashRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Switch>
          <Route exact path="/home" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
