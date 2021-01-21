import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import store from "./Store";
import { BrowserRouter as Router, Route,Link, Switch } from "react-router-dom";
import HistoryComponent from "./component/HistoryComponent";
import FalconComponent from "./component/FalconComponent";
import PayloadComponent from "./component/PayloadComponent";
import HomeComponent from "./component/HomeComponent";
import Navbar from "./component/Navbar"
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
        <Navbar/>
              <Switch>
              <Route exact path="/" component={HomeComponent} />
                <Route exact path="/history" component={HistoryComponent} />
                <Route exact path="/address" component={PayloadComponent} />
              </Switch>
            </div>
      </Router>
    </Provider>
  );
}

export default App;
