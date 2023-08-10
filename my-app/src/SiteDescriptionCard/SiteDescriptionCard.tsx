// Commponent for site description card
import { Link } from "react-router-dom";

function SiteDescriptionCard() {
  return (
    <div>
      <h2>Some Site</h2>
      <p>Some site description</p>
      <p>IMAGE</p>
      {/* Hard coded link for the moment */}
      <Link to={"/testSiteOne"}>Link</Link>
    </div>
  );
}

export default SiteDescriptionCard;
