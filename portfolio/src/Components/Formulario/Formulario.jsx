import './Formulario.css'

const Formulario = () => {
    return(
        <div id="formulario" className="formulario">
            <div className='div-left'>
            <h2>Contácteme,</h2>
            <h2>Pongámonos a trabajar.</h2>
            <div className='form-card'>
            <form action="">
                <input type="text" name='text' placeholder='Tu Nombre'/>
                <input type="email" name='email' placeholder='Tu Email' />
                <input type="text" name='asunto' placeholder='Asunto'/>
                <textarea name="mensaje" id="mensaje" cols="30" rows="10" placeholder='Escribe un mensaje'></textarea>
                {/* <input type="submit" value='ENVIAR' /> */}
                <button className='form-btn' type="submit">ENVIAR</button>
            </form>
            </div>
            </div>
            <div className='div-rigth'>
            <img className='img-flecha-gde' width="50" height="50" src="https://img.icons8.com/android/96/4D4D4D/up-right-arrow.png" alt="up-right-arrow"/>
            <p><img className='img-mano' width="25" height="25" src="https://img.icons8.com/emoji/48/4D4D4D/raised-hand-emoji.png" alt="raised-hand-emoji"/><span>Di Hola!</span></p>
            </div>
        </div>
    )
}

export { Formulario }