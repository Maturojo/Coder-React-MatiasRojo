import '../css/Navbar.css'
import Cartwidget from './Cartwidget'


const Navbar = () => {
    return (
        <nav className="nav-conteiner">
            <a href="">
                <img src="../Logo.png" alt="Logo" className='logo'/>
            </a>
            <a href="">Nuevos</a>
            <a href="">Mas vendidos</a>
            <a href="">Ofertas</a>
            <Cartwidget counter={15} list={[{name:'random'}]}/>
        </nav>
    )
}

export default Navbar