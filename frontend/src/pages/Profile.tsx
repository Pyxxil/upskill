import React from "react";
import { withRouter, RouteComponentProps, Redirect } from "react-router-dom";
import { logoutCurrentUser } from "../utils/userRequests";
import { User } from "../App";
import RyanTan from "../assets/profiles/Ryan Tan 2.png";

interface IProps extends RouteComponentProps<any> {
  user: User | null | undefined;
  setAppState: Function;
}

interface IState {}

class Profile extends React.Component<IProps, IState> {
  handleLogOut() {
    logoutCurrentUser().then((res) => {
      this.props.setAppState({ user: null });
      this.props.history.push("/");
    });
  }

  render() {
    // Redirect if there is no logged in user
    var user: User | null | undefined = this.props.user;
    if (!user) {
      return <Redirect to="/" />;
    }

    return (
      <div className="content">
        <h1>{user.name}'s profile page</h1>
        <img src={RyanTan} alt={user.name} className="profile" />
        <p style={{ paddingBottom: "4em" }}>
          As a newcomer in computer science and programming, I try to learn
          about the domain as much as I can to make up for lost time. The
          following quote inspired me to learn, grow and fail quickly - 'It's
          hard to achieve greatness by constantly looking back. It's constant
          forward hyper momentum' - Robert Herjavec.
        </p>
        <div className="centered">
          <button className="pure-button">Edit Profile</button>
          <button
            className="pure-button"
            onClick={this.handleLogOut.bind(this)}
          >
            Log out
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Profile);
