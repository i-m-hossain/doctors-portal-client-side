import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Navigation from './Pages/Shared/Navigation/Navigation';
;
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/appointment">
            <Appointment />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
