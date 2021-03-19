import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

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
import CompanyChallenges from "./pages/CompanyChallenges";
import CompanyChallenge from "./pages/CompanyChallenge";
import logo from "./assets/logo.png";

import "./App.css";
import { fetchCurrentUser } from "./utils/userRequests";

export type User = {
  email: string;
  name: string;
  password: string;
};

interface IState {
  user?: User | null | undefined;
}

const App = () => {
  let initialState: IState = { user: null };
  const [appState, setAppState] = useState(initialState);
  console.log(appState);

  // Try to fetch the user only once
  useEffect(() => {
    fetchCurrentUser().then((res) => {
      setAppState({ user: res.data.user });
    });
  }, []);

  return (
    <Router>
      <div className="custom-wrapper pure-g" id="menu">
        <div className="pure-u-1 pure-u-md-6-24">
          <div className="pure-menu">
            <img src={logo} alt="Up" className="logo" />
            <Link to="/" className="pure-menu-heading custom-brand">
              skill
            </Link>
            <a
              href="/#"
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
            {appState.user ? (
              <ul className="pure-menu-list">
                <li className="pure-menu-item">
                  <Link to="/profile" className="pure-menu-link">
                    {appState.user.name}
                  </Link>
                </li>
              </ul>
            ) : (
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
            )}
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
              instructor="Ryan Tan"
              price={40}
              description="This specialization introduces blockchain, a revolutionary technology that enables peer-to-peer transfer of digital assets without any intermediaries, and is predicted to be just as impactful as the Internet. "
            />
          )}
        />
        {/* The page where you can go to to book a class */}
        <Route
          path="/book/:id"
          render={(props) => <Book classId={parseInt(props.match.params.id)} />}
        />

        {/* The page for each of the instructors */}
        <Route path="/instructors" component={Instructors} />
        {/* View a specific instructor */}
        <Route
          path="/instructor/:id"
          render={(props) => (
            <Instructor
              instructorId={parseInt(props.match.params.id)}
              name="Ryan Tan"
              stars={4}
              description="As a newcomer in computer science and programming, I try to learn about the domain as much as I can to make up for lost time. The following quote inspired me to learn, grow and fail quickly - 'It's hard to achieve greatness by constantly looking back. It's constant forward hyper momentum' - Robert Herjavec.
              \nHi! I'm Ryan Tan and thank you for visiting my LinkedIn page. I'm currently a student studying at the University of Auckland, and I'm in my penultimate year, working towards my Bachelor of Science (Hons) in Computer Science. I am an aspiring Software Engineer/Developer, that enjoys the problem solving, collaboration and critical thinking aspect of building software. Ever since writing my first line in Python, and getting it to print what my lecturer told me to, I've been fascinated by the boundaries of what computers/software can do. I then spent the last two years learning about how humans interact with software, how computers provide an opportunity to help improve our daily lives, and the potential harms of bad software design.
              \nOutside programming, I'm currently writing on Medium, and I aim to write guides, articles about new technologies and also my personal experiences. I'd love the opportunity to collaborate with others in writing guides, so if you have a topic you'd like to work on together with me, send me an email! Link to Medium: https://medium.com/@rtan265.
              \nMy current goal is seeking industry experience. I am actively searching for a software engineering internship role for this upcoming summer (2020/2021) to showcase the skills I've learnt over the last two years. Please get in touch with me at rtan265@gmail.com. I look forward to hearing from you!
              \nSkills/Interests: Python, C++, C#, JavaScript, HTML/CSS, ReactJs, Git, Java. "
            />
          )}
        />

        {/* This will certainly need to change, it's meant to be a page for looking at your own profile */}
        <Route path="/profile" component={Profile}>
          <Profile user={appState.user} setAppState={setAppState} />
        </Route>

        {/* This is where you can view all possible rewards */}
        <Route
          path="/rewards"
          render={() => <Rewards user={appState.user?.name || ""} />}
        />

        {/* This is where you can view company challenges */}
        <Route path="/company-challenges" component={CompanyChallenges} />

        {/* View specific company challenge */}
        <Route
          path="/company-challenge/:id"
          render={(props) => (
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
