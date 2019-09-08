import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Profiles from "./components/Profiles/Profiles.js";
import NavigationBar from "./components/NavigationBar/NavigationBar.js";
import Layout from "./components/Layout.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/profiles" component={Profiles} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
