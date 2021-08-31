import logo from "./logo.svg";
import "./App.css";

import Navigation from "./Navigation/Navigation";
import Users from "./Users/Users";
import Spinner from "./Spinner/Spinner";
import { Component } from "react";
import axios from "axios";

// class App extends Component {
//   render() {
//     return <div>h1</div>;
//   }
// }

class App extends Component {
  state = {
    Users: [],
    loading: false,
    isError: false,
  };

  render() {
    const fetchUsersHandler = () => {
      this.setState({ loading: true });
      console.log("FETCH");
      const fetchedUsers = [];
      axios
        .get("https://reqres.in/api/users?page=1")
        .then((res) => {
          console.log(res);
          for (let key in res.data.data) {
            fetchedUsers.push({
              ...res.data.data[key],
              id: key,
            });
          }
          console.log(fetchedUsers);
          // this.setState({ loading: false, Users: fetchedUsers });
        })
        .catch((err) => {
          // this.setState({ loading: false, isError: true });
        });

      /* Intensely delay  */
      setTimeout(() => {
        if (this.state.isError) {
          this.setState({ loading: false });
        } else {
          this.setState({ loading: false, Users: fetchedUsers });
        }
      }, 2000);
    };

    return (
      <div className="App">
        <Navigation fetchUsers={fetchUsersHandler} />
        {this.state.loading ? <Spinner /> : null}
        {<Users users={this.state.Users} />}
      </div>
    );
  }
}

export default App;
