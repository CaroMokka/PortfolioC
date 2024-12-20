import "./About.css"
import titleAbout from "../../assets/img-about.png"

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
          <div className="wrapper-aboutme">
            <div className="container-aboutme">
              <img
                className="title-aboutme-img"
                alt="frontend"
                src={titleAbout}
              />
            </div>
            <div className="about-description">
              <h1 className="title-aboutme">¡Hola, soy Caro!</h1>
              <p className="about-p">
                Desarrolladora Frontend con más de un año de experiencia en HTML,
                CSS, JavaScript, React, Nodejs y otras tecnologías. Egresada
                del Bootcamp Fullstack JavaScript de Talento Digital. Apasionada,
                autodidacta y siempre en constante aprendizaje para mantenerme
                actualizada con las últimas tendencias del desarrollo. Valoro la
                colaboración y la comunicación efectiva, y creo en el trabajo en
                equipo para alcanzar metas comunes.
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