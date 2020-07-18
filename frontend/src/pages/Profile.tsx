import React from "react";
import { withRouter, RouteComponentProps, Redirect } from "react-router-dom";
import { logoutCurrentUser } from "../utils/userRequests";
import { User } from "../App";

interface IProps extends RouteComponentProps<any>{
  user: User | null | undefined,
  setAppState: Function
}

interface IState{

}

class Profile extends React.Component<IProps, IState> {

  constructor(props : IProps){
    super(props);
  }

  handleLogOut(){
    logoutCurrentUser().then((res)=>{
      this.props.setAppState({user: null});
      this.props.history.push("/");
    });
  }

  render(){
    // Redirect if there is no logged in user
    var user: User | null | undefined = this.props.user;
    if(!user){
      return <Redirect to="/"/>
    }
    
    return (
      <div>
        <h1>{user.name}'s profile page</h1>
        <button onClick={this.handleLogOut.bind(this)}>Log out</button>
      </div>
    );
  }
};

export default withRouter(Profile);
