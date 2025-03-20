import "./About.css";
import "../../assets/css/ranade.css";
//import titleAbout from "../../assets/img/img-about.png"
import devWoman from "../../assets/img/devwoman.webp";

export const About = () => {
  //debe ser unna function asincrona
  const downloadCV = () => {
    let pdf =
      "https://docs.google.com/document/d/1NMyZMaKvCYA2FHWQHXZ1gPijCBvvcN21bp5b_c6ouv0";
    let windowOpen = "_blank";
    let enlace = document.createElement("a");
    enlace.href = pdf;
    enlace.target = windowOpen;
    enlace.download = "CV-Carolina Araya.pdf";
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
  };

  return (
    <>
      <div className="about-container text-uppercase">
        <div className="about-container__content">
          <div className="about-container__image">
            {/* <h1>Frontend * Diseño * Creativo</h1> */}
            <img className="about-container__image-woman" alt="frontend" src={devWoman} />
            <div className="about-container__image-wave">
              <svg className="wave-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#2a2727"
                  fillOpacity="1"
                  d="M0,160L120,144C240,128,480,96,720,90.7C960,85,1200,107,1320,117.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
                ></path>
              </svg>
              <svg className="wave-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#2a2727"
                  fillOpacity="1"
                  d="M0,192L120,213.3C240,235,480,277,720,277.3C960,277,1200,235,1320,213.3L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                ></path>
              </svg>
            </div>
          </div>

          <div className="about-container__description">
            <h1 className="title-aboutme">¡Hola, soy Caro!</h1>
            <p className="about-p">
              Profesional reconvertida a IT y Desarrolladora Frontend,
              autodidacta y con más de un año de experiencia en HTML, CSS,
              JavaScript, React y Node.js. Egresada del Bootcamp Fullstack
              JavaScript de Talento Digital. Apasionada por crear interfaces
              optimizadas y mejorar la experiencia del usuario. Me destaco por
              mi aprendizaje constante, enfoque en la mejora continua y
              habilidades para el trabajo en equipo, priorizando la colaboración
              y la comunicación efectiva. También cuento con conocimientos en
              backend y experiencia en ecommerce.
            </p>
          </div>
        </div>
      </div>

      <div className="marquee" onClick={downloadCV}>
        <div className="marquee__inner" aria-hidden="true">
          <span>Curriculum*Vitae*</span>
          <span>Curriculum*Vitae*</span>
          <span>Curriculum*Vitae*</span>
          <span>Curriculum*Vitae*</span>
        </div>
      </div>
    </>
  );
};
