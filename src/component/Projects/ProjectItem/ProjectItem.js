import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Paper } from "@material-ui/core";
import React from "react";
import "./ProjectItem.css";

const ProjectItem = ({ item }) => {
  return (
    <div className="projectItem">
      <h2 className="projectItem__heading">
        {item.id}. {item.name}
      </h2>
      <Paper elevation={3} className="projectItem__container">
        <img className="projectItem__img" src={item.image} alt="" />
        <div className="projectItem__content">
          <p className="projectItem__title">How this website works:</p>
          <ul>
            {item.description.map((el) => (
              <li>{el}</li>
            ))}
          </ul>
          <div className="projectItem__technology">
            {item.technologies.map((el) => (
              <p className="technology__element">{el}</p>
            ))}
          </div>
          <div className="projectItem__link">
            <a href={item.liveLink} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faExternalLinkAlt} />
              Live
            </a>
            <a href={item.frontend} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
              Frontend
            </a>
            {item.backend && (
              <a href={item.backend} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
                Backend
              </a>
            )}
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default ProjectItem;
