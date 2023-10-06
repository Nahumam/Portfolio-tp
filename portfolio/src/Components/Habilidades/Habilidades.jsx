import './Habilidades.css'

const Habilidades = () => {
    return(
        <div className='habilidades' id='habilidades'>
            <section className='left-section'>
                <h2>Habilidades & Experiencia</h2>
                <div className="left-card">
                <img width="50" height="50" src="https://img.icons8.com/ios/50/1A1A1A/horizontal-line.png" alt="horizontal-line"/><p>LLevo un año incorporando habilidades de programación como así también ganando experiencia en el rubro!</p>
                </div>
                <h3 className='hab-cards'>Habilidades</h3>
                <div className='cards-left'>
                    <div>
                <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/4D4D4D/html-5--v1.png" alt="html-5--v1"/>
                <p>HTML</p>
                    </div>
                    <div>
                <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/4D4D4D/css3.png" alt="css3"/>
                <p>CSS</p>
                    </div>
                    <div>
                <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/4D4D4D/javascript-logo.png" alt="javascript-logo"/>
                <p>JAVASCRIPT</p>
                    </div>
                    <div>
                <img width="50" height="50" src="https://img.icons8.com/carbon-copy/100/000000/react.png" alt="react"/>
                <p>REACT</p>
                    </div>
                </div>
            </section>
            <section className='right-section'>
                <h3 className='hab-cards'>Experiencia</h3>
                <hr />
                <div className="lista-experiencia">
                    <p className='years'>2022</p><p className='cursos'>Introducción a la programación</p><p className='silicon'>Silicon Misiones</p>
                </div>
                <hr />
                <div className="lista-experiencia">
                    <p className='years'>2023</p><p className='cursos'>Desarrollador <span>FullStack</span></p><p className='silicon'>Silicon Misiones</p>
                </div>
                
            </section>
        </div>
    )
}

export { Habilidades }