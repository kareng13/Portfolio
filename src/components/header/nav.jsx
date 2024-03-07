const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };
  return (
    <>
      {" "}
      <nav>
        <div className="nav_content">
          <div className="logo_nav">
            <a href="#" className="">
              Karen
            </a>
          </div>
          <label htmlFor="check" className="checkbox_nav">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-code"
              viewBox="0 0 16 16"
            >
              <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z" />
            </svg>
          </label>
          <input
            type="checkbox"
            name="check"
            id="check"
            checked={menuOpen}
            onChange={() => setMenuOpen(!menuOpen)}
          />
          <ul className="nav_ul" onClick={handleLinkClick}>
            <li>
              <a href="#">Inicio </a>
            </li>
            <li>
              <a href="#About">Sobre mí </a>
            </li>
            <li>
              <a href="#Skills">Habilidades </a>
            </li>
            <li>
              <a href="#Portfolio">Portafolio </a>
            </li>
            <li>
              <a href="#Contact">Contacto </a>
            </li>
          </ul>
        </div>
      </nav>
      <section className="section_header">
        <div className="section_container">
          <div className="content_header">
            <p className="subtitle_header">Hola</p>
            <h1 className="title_header">
              Soy{" "}
              <span>
                Karen González
                <br />
              </span>
              Frontend
            </h1>
            <div className="action_btn_header">
              <a
                href="/CV_GuillenGonzalezKarenSofia.pdf"
                download="GuillenGonzálezKarenSofia_CV.pdf"
              >
                <button className="cv">Descargar CV</button>
              </a>
              <a href="#Portfolio">
                <button className="portfolio">Portafolio</button>
              </a>
            </div>
          </div>
          <div className="image_header">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNTg3OGQ0NjktM2E5Ny00OGU0LWI2YzktMzA0NzM5NTNjOGE0XkEyXkFqcGdeQXVyODU3MzI2MDM@._V1_.jpg"
              alt="Mia"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Nav;