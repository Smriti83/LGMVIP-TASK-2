import logo from "../logo.svg";
import "./Navigation.css";

function Navigation(props) {
  return (
    <div className="Navigation">
      <header className="Navigation-header">
        {/* <img src={logo} className="Navigation-logo" alt="logo"  /> */}
        <h2>ZIPPY</h2>
        <button className="Navigation-link" onClick={props.fetchUsers}>
          Get Users
        </button>
      </header>
    </div>
  );
}

export default Navigation;
