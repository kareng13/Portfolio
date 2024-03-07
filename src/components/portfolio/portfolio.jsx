import React, { useState } from "react";

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const portfolioItems = [
    "https://i.insider.com/57602a8cdd08956f068b4e87?width=700",
    "https://websitelearners.com/content/uploads/2019/03/make-a-blog.png",
    "https://i.blogs.es/124686/spotify/1366_2000.png",
    "https://dorcydesigns.com/wp-content/uploads/2023/01/Frame-36-1024x586.png",
  ];

  return (
    <div className="section_portfolio mx-auto px-5" id="Portfolio">
      <h4 className="title_portfolio text-center">{"<"}Portafolio{">"}</h4>
      <div className="content_portfolio">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {portfolioItems.map((item, index) => (
          <div className="col" key={index}>
            <div
              className={`card card-portfolio ${
                hoveredIndex === index ? "hovered" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={item} alt="" className="portfolio-img" />
              {hoveredIndex === index && (
                <div className="overlay-portfolio">Haz clic para ver más</div>
              )}
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Portfolio;
