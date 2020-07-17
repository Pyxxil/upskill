import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Book from "./pages/Book";
import Class from "./pages/Class";
import Classes from "./pages/Classes";
import Instructor from "./pages/Instructor";
import Instructors from "./pages/Instructors";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Rewards from "./pages/Rewards";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="custom-wrapper pure-g" id="menu">
        <div className="pure-u-1 pure-u-md-6-24">
          <div className="pure-menu">
            <Link to="/" className="pure-menu-heading custom-brand">
              Upskill
            </Link>
            <a
              href="#"
              aria-label="None"
              className="custom-toggle"
              id="toggle"
              style={{ height: "2.5em" }}
            >
              <s className="bar"></s>
              <s className="bar"></s>
            </a>
          </div>
        </div>
        <div className="pure-u-1 pure-u-md-12-24">
          <div className="pure-menu pure-menu-horizontal custom-can-transform centered">
            <ul className="pure-menu-list">
              <li className="pure-menu-item">
                <Link to="/instructors" className="pure-menu-link">
                  Instructors
                </Link>
              </li>
              <li className="pure-menu-item">
                <Link to="/classes" className="pure-menu-link">
                  Classes
                </Link>
              </li>
              <li className="pure-menu-item">
                <Link to="/rewards" className="pure-menu-link">
                  Rewards
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pure-u-1 pure-u-md-6-24">
          <div className="pure-menu pure-menu-horizontal custom-menu-3">
            <ul className="pure-menu-list">
              <li className="pure-menu-item">
                <Link to="/login" className="pure-menu-link">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Switch>
        <Route exact path="/" component={Landing} />
        {/* The login page */}
        <Route path="/login" component={Login} />

        {/* The page for each of the classes we offer */}
        <Route path="/classes" component={Classes} />
        {/* View a specific class */}
        <Route
          path="/class/:id"
          render={(props) => <Class classId={props.match.params.id} />}
        />
        {/* The page where you can go to to book a class */}
        <Route
          path="/class/:id/book"
          render={(props) => <Book classId={props.match.params.id} />}
        />

        {/* The page for each of the instructors */}
        <Route path="/instructors" component={Instructors} />
        {/* View a specific instructor */}
        <Route
          path="/instructor/:id"
          render={(props) => (
            <Instructor instructorId={props.match.params.id} />
          )}
        />

        {/* This will certainly need to change, it's meant to be a page for looking at your own profile */}
        <Route path="/profile" component={Profile} />

        {/* This is where you can view all possible rewards */}
        <Route path="/rewards" component={Rewards} />
      </Switch>
    </Router>
  );
};

export default App;
