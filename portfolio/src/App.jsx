import './App.css'

function App() {

  return (
    <>
    <main id='#'>
    <div className='h1-h2-a'>
      <h1>Monsalve Nahum</h1>
      <h2 className='h2-main'>Web Developer</h2>
      <nav className='redes-sociales'>
        <a href="https://www.instagram.com/" >INSTAGRAM <img width="10" height="10" src="https://img.icons8.com/android/24/FD7E14/up-right-arrow.png" alt="up-right-arrow"/></a>
        <a href="https://www.facebook.com">FACEBOOK <img width="10" height="10" src="https://img.icons8.com/android/24/FD7E14/up-right-arrow.png" alt="up-right-arrow"/></a>
        <a href="https://www.linkedin.com">LINKEDIN <img width="10" height="10" src="https://img.icons8.com/android/24/FD7E14/up-right-arrow.png" alt="up-right-arrow"/></a>
      </nav>
      </div>
      <div className='conteiner-1'>
        <section className='sec-info-left'>
        <p>Mi nombre es Nahum, actualmente me encuentro estudiando Desarrollo Web en Silicon Misiones.</p>
        <div className='sec-left'>
        <p>Contratame!</p><img width="12" height="12" src="https://img.icons8.com/android/24/FFFFFF/up-right-arrow.png" alt="up-right-arrow"/>
        </div>
        <img className='clutch-logo' src="/clutch-logo.png" alt="Clutch" />
        </section>
        <div className='borde-img'>
      <img className='img-central' src="/ImgNahum-PhotoRoom.png" alt="Nahum-Img" />
        </div>
        <section className='sec-info-right'>
      <ul className='ul-photo'>
        <li className='li-num'>6</li>
        <li className='li-letras'>PROYECTOS COMPLETADOS</li>
        <li className='li-num'>80%</li>
        <li className='li-letras'>CALIFICACION DE CLIENTES</li>
        <li className='li-num'>1</li>
        <li className='li-letras'>AÑOS DE EXPERIENCIA</li>
      </ul>
      </section>
      </div>
      </main>
    </>
  )
}

export default App
