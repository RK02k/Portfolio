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
    title: "Responsive Dynamic Website 🎉",
    description:
      "Created a user-friendly interface with HTML, enhancing responsiveness across devices using Bootstrap 5.Transformed a basic backend into a dynamic powerhouse with Node.js and Express.js, fostering flawless client-server communication.",
    url: "https://github.com/RK02k/RK_Tech.github.io",
  },
  {
    title: "Chatting App",
    description:
      "Engineered an intuitive user interface leveraging the power of HTML and CSS, guaranteeing a flawless and aesthetically pleasing user journey. Harnessing the prowess of Node.js and Socket.IO, architected a responsive and high-performing backend, facilitating instantaneous user communication with seamless efficiency.",
    url: "https://github.com/RK02k/chatapp.github.io",
  },
  {
    title: "ReactCart - An E-Commerce Platform",
    description:
      "Crafted a visually appealing user interface with HTML, CSS, and Bootstrap, ensuring responsiveness across various devices.",
    url: "https://github.com/RK02k/Myntra_clone",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
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