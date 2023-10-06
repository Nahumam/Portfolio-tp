import './Servicios.css'
import '@webpunk/circular-text';

const Servicios = () => {
    return(
        <div className='servicios' id='servicios'>
            <section className='left-serv'>
                <h2>Servicios | Ofertas</h2>
                <div className="left-card">
                <img width="50" height="50" src="https://img.icons8.com/ios/50/1A1A1A/horizontal-line.png" alt="horizontal-line"/><p>Elige el servicio que estas buscando!</p>
                </div>
                <circular-text
                text="PERSONAL PORTFOLIO - PERSONAL PORTFOLIO - "
                radius="70">
                </circular-text>
            </section>
            <section>
            <hr />
                <div className='lista-serv'>
                    <p className='numero'>01/</p><p className='lenguaje'>Frontend</p><a href=""><img width="60" height="60" src="https://img.icons8.com/ios-filled/50/FD7E14/circled-up-right-2.png" alt="circled-up-right-2"/><span>Explorar</span></a>
                </div>
            <hr />
            <div className="lista-serv">
            <p className='numero'>02/</p><p className='lenguaje'>Backend</p><a href=""><img width="60" height="60" src="https://img.icons8.com/ios-filled/50/FD7E14/circled-up-right-2.png" alt="circled-up-right-2"/><span>Explorar</span></a>
                    </div>
            <hr />
            <div className="lista-serv">
            <p className='numero'>03/</p><p className='lenguaje'>Frameworks</p><a href=""><img width="60" height="60" src="https://img.icons8.com/ios-filled/50/FD7E14/circled-up-right-2.png" alt="circled-up-right-2"/><span>Explorar</span>
                </a>
                </div>
            </section>
        </div>
    )
}

export { Servicios }