import "./App.css";
import Header from "./Components/Header/Header";
import Cards from "./Components/Cards/Cards";
import Buttons from "./Components/Buttons/Buttons";
import ListChats from "./Components/ListChats/Chats";
import ChatIndividual from "./Components/ChatIndividual/ChatIndividual";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:persona">
            <Header botonRetroceder="/chats" />
            <ChatIndividual />
          </Route>

          <Route path="/chats">
            <Header botonRetroceder="/" />
            <ListChats />
          </Route>

          <Route path="/">
            <Header />
            <Cards />
            <Buttons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
