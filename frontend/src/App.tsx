import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link, RouteComponentProps } from "react-router-dom";

import Book from "./pages/Book";
import Class from "./pages/Class";
import Classes from "./pages/Classes";
import Instructor from "./pages/Instructor";
import Instructors from "./pages/Instructors";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Rewards from "./pages/Rewards";
import CompanyChallenges from './pages/CompanyChallenges';
import CompanyChallenge from './pages/CompanyChallenge';

import "./App.css";
import { fetchCurrentUser } from './utils/userRequests';


export type User = {
  email: string,
  name: string,
  password: string
}

interface IState {
  user?: User | null | undefined
}

const App = () => {
  let initialState: IState = { user: null };
  const [appState, setAppState] = useState(initialState);
  console.log(appState);

  // Try to fetch the user only once
  useEffect(() => {
    fetchCurrentUser().then((res) => {
      setAppState({ user: res.data.user })
    });
  }, []);

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
              <li className="pure-menu-item">
                <Link to="/company-challenges" className="pure-menu-link">
                  Company Challenges
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pure-u-1 pure-u-md-6-24">
          <div className="pure-menu pure-menu-horizontal custom-menu-3">
            {appState.user ?
              <ul className="pure-menu-list">
                <li className="pure-menu-item">
                  <Link to="/profile" className="pure-menu-link">
                    {appState.user.name}
                  </Link>
                </li>
              </ul> :
              <ul className="pure-menu-list">
                <li className="pure-menu-item">
                  <Link to="/register" className="pure-menu-link">
                    Register
                  </Link>
                </li>
                <li className="pure-menu-item">
                  <Link to="/login" className="pure-menu-link">
                    Login
                </Link>
                </li>
              </ul>
            }
          </div>
        </div>
      </div>

      <Switch>
        <Route exact path="/" component={Landing} />
        {/* The login page */}
        <Route path="/login">
          <Login user={appState.user} setAppState={setAppState}></Login>
        </Route>

        {/* The register page */}
        <Route path="/register">
          <Register user={appState.user} setAppState={setAppState}></Register>
        </Route>

        {/* The page for each of the classes we offer */}
        <Route path="/classes" component={Classes} />
        {/* View a specific class */}
        <Route
          path="/class/:id"
          render={(props) => (
            <Class
              name={props.match.params.id}
              instructor="John Smith"
              price={20}
              description="This class introduces the basics of Blockchain"
            />
          )}
        />
        {/* The page where you can go to to book a class */}
        <Route
          path="/book/:id"
          render={(props) => <Book classId={props.match.params.id} />}
        />

        {/* The page for each of the instructors */}
        <Route path="/instructors" component={Instructors} />
        {/* View a specific instructor */}
        <Route
          path="/instructor/:id"
          render={(props) => (
            <Instructor
              instructorId={props.match.params.id}
              name="John Smith"
              stars={4.5}
              description="I am a doctor that teaches Physics, Physics, Physics, Physics, Physics, Physics, Physics, Physics, Physics, Physics, Physics.  \n
              This is one corner… of one country, in one continent, on one planet that’s a corner of a galaxy that’s a corner of a universe that is forever growing and shrinking and creating and destroying and never remaining the same for a single millisecond. And there is so much, so much to see.\n
              The world is vast and there's so much to explore, so much to see and so much to learn...\n
              Where do you want to start?"
              image="../assets/John Smith.jpg"
            />
          )}
        />

        {/* This will certainly need to change, it's meant to be a page for looking at your own profile */}
        <Route path="/profile" component={Profile}>
          <Profile user={appState.user} setAppState={setAppState} />
        </Route>

        {/* This is where you can view all possible rewards */}
        <Route path="/rewards" component={Rewards} />

        {/* This is where you can view company challenges */}
        <Route path="/company-challenges" component={CompanyChallenges} />

        {/* View specific company challenge */}
        <Route path="/company-challenge/:id" render={(props) => (
          <CompanyChallenge
            challengeId={props.match.params.id} 
            name="Super Hard Challenge"
            company="DEVS"
            description="For this challenge, you need to come up with an idea in 48 hours and implement it."
            />
        )} 
        />
      </Switch>
    </Router>
  );
};

export default App;
