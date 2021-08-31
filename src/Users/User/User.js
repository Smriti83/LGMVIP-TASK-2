import { Component } from "react";

import "./User.css";
class User extends Component {
  render() {
    return (
      <div className="User">
        <img alt={this.props.key} src={this.props.avatar} className="img" />
        <h3 className="Name">
          Name: {this.props.first_name} {this.props.last_name}
        </h3>
        {/* <h3>{this.props.last_name}</h3> */}
        <h4 className="Email">Email : {this.props.email}</h4>
      </div>
    );
  }
}

export default User;
