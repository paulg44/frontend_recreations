// Component to hold all the recreated sites
import TestSiteDisplay from "../Sites/TestSiteDisplay/TestSiteDisplay";

function SitesContainer() {
  return (
    <div className="siteContainer">
      {/* For every recreated/restyled website add a component with a route path */}
      <TestSiteDisplay />
    </div>
  );
}

export default SitesContainer;
