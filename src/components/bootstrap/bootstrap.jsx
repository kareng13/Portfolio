import Head from "next/head";

const Bootstrap = (props) => {
  return (
    <div>
      <Head>
        <title>Karen G</title>
        <link rel="icon" href="/favicon.ico" sizes="32x32"  />        
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        />
        <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet" />
      </Head>
      <div>{props.children}</div>
    </div>
  );
};

export default Bootstrap;



{/* <div className="section_portfolio">
<h2 className="title_skills">{'<'}{t("portfolio.portfolio")}{">"}</h2>
<div className="worksContainer container_portfolio">
  <article className="workBox">
    <div className="workImageContainer">
      <img src="https://i.insider.com/57602a8cdd08956f068b4e87?width=700" alt="" />
    </div>
    <div className="workDescribeContainer">
      <h3>Speech To Text</h3>
      <h4>"Technologies used: "
        <span>JavaScript</span>
        ", "
        <span>HTML</span>
        ", "
      </h4>
      <ul>
        <li>Real time listen the voice</li>
        <li>good looking ui</li>
        <li>Just for fun</li>
      </ul>
    </div>
  </article>
  <article className="workBox">
    <div className="workImageContainer">
      <img src="https://i.insider.com/57602a8cdd08956f068b4e87?width=700" alt="" />
    </div>
    <div className="workDescribeContainer">
      <h3>Speech To Text</h3>
      <h4>"Technologies used: "
        <span>JavaScript</span>
        ", "
        <span>HTML</span>
        ", "
      </h4>
      <ul>
        <li>Real time listen the voice</li>
        <li>good looking ui</li>
        <li>Just for fun</li>
      </ul>
    </div>
  </article>
</div>
</div>
 */}







    // <div className="section_portfolio mx-auto px-5" id="Portfolio">
    //   <h4 className="title_portfolio text-center">
    //     {"<"}{t("portfolio.portfolio")}{">"}
    //   </h4>
    //   <div className="content_portfolio">
    //     <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    //       <div className="col">
    //         <div
    //           className={`card card-portfolio ${
    //             hoveredIndex === 0 ? "hovered" : ""
    //           }`}
    //           onMouseEnter={() => handleMouseEnter(0)}
    //           onMouseLeave={handleMouseLeave}
    //         >
    //           <a href="/portfolios">
    //             <img
    //               src="https://i.insider.com/57602a8cdd08956f068b4e87?width=700"
    //               alt=""
    //               className="portfolio-img"
    //             />
    //             {hoveredIndex === 0 && (
    //               <div className="overlay-portfolio">
    //                 {t("portfolio.seemore")}
    //               </div>
    //             )}
    //           </a>
    //         </div>
    //       </div>
    //       <div className="col">
    //         <div
    //           className={`card card-portfolio ${
    //             hoveredIndex === 1 ? "hovered" : ""
    //           }`}
    //           onMouseEnter={() => handleMouseEnter(1)}
    //           onMouseLeave={handleMouseLeave}
    //         >
    //           <a href="#">
    //             <img
    //               src="https://websitelearners.com/content/uploads/2019/03/make-a-blog.png"
    //               alt=""
    //               className="portfolio-img"
    //             />
    //             {hoveredIndex === 1 && (
    //               <div className="overlay-portfolio">
    //                 {t("portfolio.seemore")}
    //               </div>
    //             )}
    //           </a>
    //         </div>
    //       </div>
    //       <div className="col">
    //         <div
    //           className={`card card-portfolio ${
    //             hoveredIndex === 2 ? "hovered" : ""
    //           }`}
    //           onMouseEnter={() => handleMouseEnter(2)}
    //           onMouseLeave={handleMouseLeave}
    //         >
    //           <a href="#">
    //             <img
    //               src="https://i.blogs.es/124686/spotify/1366_2000.png"
    //               alt=""
    //               className="portfolio-img"
    //             />
    //             {hoveredIndex === 2 && (
    //               <div className="overlay-portfolio">
    //                 {t("portfolio.seemore")}
    //               </div>
    //             )}
    //           </a>
    //         </div>
    //       </div>
    //       <div className="col">
    //         <div
    //           className={`card card-portfolio ${
    //             hoveredIndex === 3 ? "hovered" : ""
    //           }`}
    //           onMouseEnter={() => handleMouseEnter(3)}
    //           onMouseLeave={handleMouseLeave}
    //         >
    //           <a href="#">
    //             <img
    //               src="https://dorcydesigns.com/wp-content/uploads/2023/01/Frame-36-1024x586.png"
    //               alt=""
    //               className="portfolio-img"
    //             />
    //             {hoveredIndex === 3 && (
    //               <div className="overlay-portfolio">
    //                 {t("portfolio.seemore")}
    //               </div>
    //             )}
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>