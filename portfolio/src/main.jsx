import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Navbar} from './Components/Navbar/Navbar.jsx'
import {Servicios} from './Components/Servicios/Servicios.jsx'
import { Habilidades } from './Components/Habilidades/Habilidades.jsx'
import { Trabajos } from './Components/Trabajos/Trabajos.jsx'
import {Formulario} from './Components/Formulario/Formulario.jsx'
import { Footer } from './Components/Footer/Footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Servicios />
    <Habilidades />
    <Trabajos />
    <Formulario />
    <Footer />
  </React.StrictMode>,
)
