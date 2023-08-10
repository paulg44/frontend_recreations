// Component to display the recreation and restyle
import "./TestSiteDisplay.css";
import { useState } from "react";
import TestSiteRecreate from "./TestSiteRecreate";
import TestSiteRestyle from "./TestSiteRestyle";

// Write function that toggles between components when button pressed

function TestSiteDisplay() {
  // Use state for toggle
  const [isRecreateVisible, setIsRecreateVisible] = useState(true);

  function showRecreate() {
    setIsRecreateVisible(true);
  }

  function showRestyle() {
    setIsRecreateVisible(false);
  }

  return (
    <div className="testSiteDisplay">
      {isRecreateVisible ? (
        <div className="testSiteRecreate">
          <TestSiteRecreate />
        </div>
      ) : (
        <div className="testSiteRestyle">
          <TestSiteRestyle />
        </div>
      )}

      {/* Button visual text will change depending on what page you are on for example on ReacreatedSite button will say restyle and vice versa */}
      <button
        className="toggleSite"
        onClick={isRecreateVisible ? showRestyle : showRecreate}
      >
        {isRecreateVisible ? "Restyle" : "Recreate"}
      </button>
    </div>
  );
}

export default TestSiteDisplay;
