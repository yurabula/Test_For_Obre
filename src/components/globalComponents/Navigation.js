import "./Navigation.css"

import { Link } from "react-router-dom";

const Navigation = () =>{
    return(
        <div className="navigation">
            <Link to={"/jobRequest"}>JobRequest</Link>
            <Link to={"/login"}>Login</Link>
        </div>
    )

}

export default Navigation;