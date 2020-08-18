import React from "react";

function Portfolio() {
  return (
    <>
      <div id="portfolio_background">
        <div id="portfolio">
          <div id="portfolio_bar"></div>
          <h1 id="_projects">Projects</h1>
          <div id="projects">
            <div className="project">
              <a
                href="https://codepen.io/wealthmiq/full/QWWvvxG"
                target="_blank"
              >
                {" "}
                <img src="../project1.png" alt="Project1" />
              </a>
            </div>
            <div className="project">
              <a href="#" target="_blank">
                <img src="../project3.png" alt="Project2" />
              </a>
            </div>
            <div className="project">
              {" "}
              <a href="#" target="_blank">
                <img src="../contact_app.png" alt="Project3" />
              </a>{" "}
            </div>
            <div className="project">
              {" "}
              <a href="https://conf.dbsprojects.ie/" target="_blank">
                <img src="../confoav.png" alt="Project4" />
              </a>{" "}
            </div>
            <div className="project">
              {" "}
              <a
                href="https://codepen.io/wealthmiq/full/GRRvRyJ"
                target="_blank"
              >
                <img src="../docu.png" alt="Project5" />
              </a>
            </div>
            <div className="project">
              {" "}
              <a
                href="https://codepen.io/wealthmiq/full/RwwKvJP"
                target="_blank"
              >
                <img src="../project2.png" alt="Project6" />
              </a>
            </div>
          </div>
        </div>
        <a href="#nav_ul">
          <div id="up"></div>
        </a>
        <div id="portfolio_bar"></div>
      </div>
    </>
  );
}

export default Portfolio;
