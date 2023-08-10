// Component to hold all the recreated sites
import SiteDescriptionCard from "../SiteDescriptionCard/SiteDescriptionCard";

function SitesContainer() {
  return (
    <div className="siteContainer">
      {/* For every recreated/restyled website add a component with a route path */}
      <SiteDescriptionCard />
    </div>
  );
}

export default SitesContainer;
