// Component for Homepage
import "./Homepage.css";
import SitesContainer from "../SitesContainer/SitesContainer";
import backgroundImage from "../IMG/vecteezy_tech-wireframe-volume-bubble-lines-wave-decorative_7546007.jpg";

function Homepage() {
  return (
    <div
      className="homepage"
      style={{
        background: `url(${backgroundImage}) no-repeat center center/cover`,
      }}
    >
      <h1>Frontend Recreations</h1>
      <SitesContainer />
    </div>
  );
}

export default Homepage;
