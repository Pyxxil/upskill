import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Book from "./pages/Book";
import Course from "./pages/Course";
import Courses from "./pages/Courses";
import Instructor from "./pages/Instructor";
import Instructors from "./pages/Instructors";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

import "./App.css";
import Rewards from "./pages/Rewards";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        {/* The login page */}
        <Route path="/login" component={Login} />

        {/* The page for each of the courses we offer */}
        <Route path="/courses" component={Courses} />
        {/* View a specific course */}
        <Route
          path="/course/:id"
          render={(props) => <Course courseId={props.match.params.id} />}
        />
        {/* The page where you can go to to book a course */}
        <Route
          path="/course/:id/book"
          render={(props) => <Book courseId={props.match.params.id} />}
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
