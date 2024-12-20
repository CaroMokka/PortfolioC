import "./Footer.css"
export const Footer = () => {
    return (
        <footer className="footer-container text-uppercase">
            <div className="footer-info fw-lighter">
                <h1>Carolina Araya González</h1>
                <p><i class="fa-solid fa-map-location-dot"></i><span className='mx-4'>Santiago, Chile</span></p>
            </div>
            <div className="footer-contact fw-lighter">
                <h3>Contáctame</h3>
                <p>Y pongámonos manos a la obra</p>
            </div>
            <div className="footer-sns">
                <div className="sns-links">
                    <a href="https://www.linkedin.com/in/carolina-araya-g/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                    <a href="https://github.com/CaroMokka" target="_blank" rel="noreferrer">
                        <i className="fab fa-github github"></i>
                    </a>
                    <a href="mailto:ci.arayagonzalez@gmail.com?subject=Consulta desde el portafolio&body=Hola,%20me%20gustaría%20contactarme%20contigo." target="_blank" rel="noreferrer"><i className="fa-solid fa-envelope envelope"></i></a>
                </div>
                <div className="design-by">
                made with 🤍 by caro araya 2024
                </div>
            </div>

        </footer>
    )
}