// Component to display the recreation and restyle
import TestSiteRecreate from "./TestSiteRecreate";
import TestSiteRestyle from "./TestSiteRestyle";

function TestSiteDisplay() {
  return (
    <div className="testSiteDisplay">
      <TestSiteRecreate />
      <TestSiteRestyle />
      {/* Button visual text will change depending on what page you are on for example on ReacreatedSite button will say restyle and vice versa */}
      <button className="toggleSite">Recreate/Restyle</button>
    </div>
  );
}

export default TestSiteDisplay;
