import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles/navbar.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TypoGraphy from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Members from "./components/Members";
import College from "./components/College";
import Home from "./components/Home";
import Registration from "./components/Registration";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div class="main">
      <AppBar color="" position="static">
        {/* <List component="nav">
          <ListItem component="div">
            <ListItemText inset>
              <TypoGraphy color="inherit" variant="title">
                Logo
              </TypoGraphy>
            </ListItemText> */}

        {/* <ListItemText inset>
              <TypoGraphy color="inherit" variant="title">
                QueerBook
              </TypoGraphy>
            </ListItemText> */}
        {/* <span class="d-block p-1 bg-primary text-white">
              <p class="font-weight-bolder text-lg-center">QueerBook</p>
            </span> */}
        {/* </ListItem> */}
        {/* </List> */}
        <span class="d-block p-1 bg-primary text-white">
          <p class="font-weight-bolder text-lg-center">QueerBook</p>
        </span>
        <BrowserRouter>
          <Switch>
            <Route path="/member" component={Members} />
            <Route path="/college" component={College} />
            <Route path="/home" component={Home} />
            <Route path="/registration" component={Registration} />
          </Switch>
        </BrowserRouter>
      </AppBar>
    </div>
  );
}

export default App;
