import './Footer.css'

const Footer = () => {
    return(
        <div className='footer'>
            <hr className='hr-footer' />
            <div className='div-footer'>
            <p><img width="16" height="16" src="https://img.icons8.com/small/16/FFFFFF/circled-c.png" alt="circled-c"/> 2023 - Desarrollado por Monsalve Nahum</p>
            <div>
            <a href="https://www.instagram.com"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/FFFFFF/instagram-new--v1.png" alt="instagram-new--v1"/></a>
            <a href="https://github.com/Nahumam"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/FFFFFF/github.png" alt="github"/></a>
            <a href="https://www.linkedin.com"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/FFFFFF/linkedin--v1.png" alt="linkedin--v1"/></a>
            </div>
            <p>nahummonsalve@gmail.com</p>
            </div>
        </div>
    )
}

export { Footer }