// Component to display the recreation and restyle

import TestSiteTwoRecreate from "./TestSiteTwo";
import { Link } from "react-router-dom";

// Write function that toggles between components when button pressed

function TestSiteTwoDisplay() {
  return (
    <div className="testSiteDisplay">
      <Link to={"/"}>Home</Link>
      <TestSiteTwoRecreate />
    </div>
  );
}

export default TestSiteTwoDisplay;
