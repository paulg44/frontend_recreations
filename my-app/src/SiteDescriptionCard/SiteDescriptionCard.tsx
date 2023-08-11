// Commponent for site description card
import { Link } from "react-router-dom";
import "./SiteDescritpionCard.css";
import { DescriptionCardProps } from "../types";

function SiteDescriptionCard({
  title,
  description,
  linkTo,
}: DescriptionCardProps) {
  return (
    <div className="descriptionCard">
      <h2>{title}</h2>
      <p>{description}</p>
      {/* <img src={img} alt={alt}></img> */}
      {/* Hard coded link for the moment */}
      <Link to={linkTo}>Link</Link>
    </div>
  );
}

export default SiteDescriptionCard;
