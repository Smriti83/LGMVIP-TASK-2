import { Component } from "react";
// import App from "../App";
import "./Users.css";

import User from "./User/User";
class Users extends Component {
  render() {
    return (
      <div className="Users">
        {this.props.users.map((user) => (
          <User
            avatar={user.avatar}
            first_name={user.first_name}
            last_name={user.last_name}
            email={user.email}
            key={user.key}
          />
        ))}
      </div>
    );
  }
}

export default Users;
