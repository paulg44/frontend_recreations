// Component to display uber eats
import "./UberEatsDisplay.css";
import { Link } from "react-router-dom";
import UberEatsRecreate from "./UberEatsRecreate";

function UberEatsDisplay() {
  return (
    <div>
      <Link to={"/"} className="uberEatsHomeLink">
        Home
      </Link>
      <UberEatsRecreate />
    </div>
  );
}

export default UberEatsDisplay;
