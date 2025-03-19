import "./Proyects.css"
import imgStarWars from "../../assets/img/Star_Wars_.png"
import spotify_img from "../../assets/img/spotify.png"
import snakeGame from "../../assets/img/snakeGame.png"
import ecommerceImage from "../../assets/img/card03.png"

export const Proyects = () => {
    return (
        <section className="container-fluid container-proyects">
        <div className="wrapper-proyects">
            <h3 className="proyects-title">Proyectos</h3>
            <div className="d-flex justify-content-around flex-wrap">
                <div className="card rounded-0 m-2" style={{ width: '18rem' }}>
                    <img src={spotify_img} className="card-img-top rounded-0" style={{ minHeight: '200px' }}
                        alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">API Spotify</h5>
                        <p className="card-text">Un proyecto de consumo de la API de Spotify utiliza Flask con Python en el backend para manejar autenticación y solicitudes a la API, mientras que React en el frontend muestra playlists, canciones y artistas con una interfaz interactiva.</p>
                    </div>
                    <div className="list-group rounded-0 text-end">
                        <a href="#" className="list-group-item list-group-item-action">Website</a>
                        <a href="https://github.com/CaroMokka/Spotify-API-" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Code</a>
                    </div>
                </div>
                <div className="card rounded-0 m-2" style={{ width: '18rem' }}>
                    <img src={imgStarWars} className="card-img-top rounded-0" style={{ minHeight: '200px' }}
                        alt="starwars"/>
                    <div className="card-body">
                        <h5 className="card-title">API Star Wars</h5>
                        <p className="card-text">Proyecto que consume la API de Star Wars usa un backend en Python con Flask para gestionar solicitudes y un frontend en React para mostrar personajes, naves y planetas con interactividad y diseño atractivo.</p>
                        {/* <!-- <a href="#" className="btn btn-card rounded-0 d-flex justify-content-end">Ver</a> --> */}
                    </div>
                    <div className="list-group rounded-0 text-end">
                        <a href="#" className="list-group-item list-group-item-action">Website</a>
                        <a href="https://github.com/CaroMokka/StarWars-Frontend-Backend" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Code</a>
                    </div>
                </div>
                <div className="card rounded-0 m-2" style={{ width: '18rem' }}>
                    <img src={ecommerceImage} className="card-img-top rounded-0" style={{ minHeight: '200px' }}
                        alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Ecommerce Shop</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                            of the cards content.</p>
                    </div>
                    <div className="list-group rounded-0 text-end">
                        <a href="#" className="list-group-item list-group-item-action">Website</a>
                        <a href="#" className="list-group-item list-group-item-action">Code</a>
                    </div>
                </div>
                <div className="card rounded-0 m-2" style={{ width: '18rem' }}>
                    <img src={snakeGame} className="card-img-top rounded-0" style={{ minHeight: '200px' }}
                        alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Juego Snake JS</h5>
                        <p className="card-text">El juego Snake en JavaScript consiste en mover una serpiente que crece al comer comida, evitando colisionar consigo misma o con los bordes, utilizando lógica de coordenadas y eventos de teclado.</p>
                    </div>
                    <div className="list-group rounded-0 text-end">
                        <a href="#" className="list-group-item list-group-item-action">Website</a>
                        <a href="https://github.com/CaroMokka/Snake-JS" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Code</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}