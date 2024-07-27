import "./Navigation.css";

import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <p>DashWork</p>
      </div>
      <div className="buttons">
        <Link to={"/"} className="button">Home</Link>
        <Link to={"/jobRequest"} className="button">JobRequest</Link>
        <Link to={"/login"} className="button">Logout</Link>
      </div>
    </div>
  );
};

export default Navigation;
