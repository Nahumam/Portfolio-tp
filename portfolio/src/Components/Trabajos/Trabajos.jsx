import "./Trabajos.css"


const Trabajos = () => {
    return(
        <div className="trabajos" id="trabajos">
        <div className="tittle-line">
            <h2>Ultimos Trabajos</h2>
            <hr className="line" />
        </div>
        <div className="img-cards">
            <img src= '/img(1).png' alt="img(1)" />
            <img src= '/img(2).png' alt="img(2)" />
            <img src= '/img(3).png' alt="img(3)" />
            <img src= '/img(4).png' alt="img(4)" />
        </div>
        <div className="conteiner-a">
        <div className="all-work">
            <a href="https://github.com/Nahumam"><img width="12" height="12" src="https://img.icons8.com/android/24/FFFFFF/up-right-arrow.png" alt="up-right-arrow"/>Ver Todos Los Trabajos</a>
        </div>
        </div>
        </div>
    )
}

export { Trabajos }