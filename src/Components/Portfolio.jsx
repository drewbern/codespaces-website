/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Electrogram Annotation Web App",
    description:
      "Built a web application for efficient physician annotation of electrogram data, reducing annotation time by 90%. Implemented using React.js and modern web technologies.",
    url: "LINK_TO_PROJECT", // Replace with actual link
  },
  {
    title: "Constant Current Pacemaker",
    description:
      "Developed embedded system using Zephyr RTOS and ARM Cortex-M4 for a medical pacemaker with BLE connectivity, voltage/current sensing, and configurable pacing output.",
    url: "https://github.com/drewbern", // Optional: link to related repo if public
  },
  {
    title: "TACC Health Informatics App",
    description:
      "Created an Android application for scanning grocery items and providing allergen/diet information. Built with Docker, Flask, and MariaDB backend infrastructure.",
    url: "https://github.com/drewbern", // Optional: link to related repo if public
  },
  {
    title: "Google Hardware Product Sprint Clock",
    description:
      "Led development of a microcontroller-based clock from prototype to PCB design. Selected for EVT Week at Google HQ for final product optimization.",
    url: "https://github.com/drewbern", // Optional: link to related repo if public
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
