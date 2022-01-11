import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          {/* <Route path='/users'>
            <Users/>
          </Route>
          <Route path='/about'>
            <About/>
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
