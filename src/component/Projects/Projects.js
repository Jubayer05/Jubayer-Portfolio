import React from "react";
import image1 from "../../image/project/project-1.png";
import image2 from "../../image/project/project-2.png";
import image3 from "../../image/project/project-3.png";
import image4 from "../../image/project/project-4.png";
import "./Project.css";
import ProjectItem from "./ProjectItem/ProjectItem";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      name: "Foody",
      description: [
        "It’s a website of a restaurant where users can order food online for home delivery.",
        "Every food item has a food details page. By clicking the title of food one can visit the food details page.",
        "If user want to go shipment page then he must be logged in.",
        "Admin functionality is available for the website. Only admin can access this section. Admin can add a new food item, view order history and also make a new admin",
      ],
      technologies: [
        "react",
        "redux",
        "JavaScript",
        "firebase",
        "node",
        "express",
        "mongoDB",
        "mongoose",
        "material ui",
        "multer",
        "react-slick",
        "jwt",
      ],
      image: image1,
      liveLink: "https://foody-01.netlify.app/",
      frontend: "https://github.com/Jubayer05/foody-client",
      backend: "https://github.com/Jubayer05/foody-server",
    },

    {
      id: 2,
      name: "Items Catalogue",
      description: [
        "It’s like a social media website where a user can see all the posted items but without login he can’t do any action",
        "If a user logged in then he can post an item, likes other’s item, edit or delete his own item.",
        "An items include title, description, image, tags and date.",
      ],
      technologies: [
        "react",
        "redux",
        "JavaScript",
        "firebase",
        "node.js",
        "express",
        "mongoDB",
        "mongoose",
        "material-ui",
        "Css",
        "Base - 64",
        "JWT",
      ],
      image: image2,
      liveLink: "https://items-catalogue.netlify.app/",
      frontend: "https://github.com/Jubayer05/items-catalogue-client",
      backend: "https://github.com/Jubayer05/items-catalogue-server",
    },

    {
      id: 3,
      name: "Amazon Clone",
      description: [
        "It’s a clone website of amazon with fully responsive.",
        "A user can order item & if he want to go checkout page then he must be logged in. ",
        "Payment gateway have been used here where user can simply pay their bill with their card.",
      ],
      technologies: [
        "react",
        "react-hook",
        "JavaScript",
        "firebase",
        "node",
        "express",
        "material ui",
      ],
      image: image3,
      liveLink: "https://amazon-clone-01.netlify.app/",
      frontend: "https://github.com/Jubayer05/amazon-clone-client",
      backend: "https://github.com/Jubayer05/amazon-clone-server",
    },
    {
      id: 4,
      name: "Ferofly",
      description: [
        "It's a single-page application with a good-looking responsive layout. ",
        "The design site is focused much more in this application.",
      ],
      technologies: [
        "react",
        "react-hook",
        "JavaScript",
        "CSS",
        "react-slick",
        "google-maps",
      ],
      image: image4,
      liveLink: "https://ferofly1.netlify.app/",
      frontend: "https://github.com/Jubayer05/ferofly",
    },
  ];

  return (
    <div className="project" id="project">
      <div className="project__container">
        <h1 className="section__heading">Project Area</h1>
        {projectData.map((item) => (
          <ProjectItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
