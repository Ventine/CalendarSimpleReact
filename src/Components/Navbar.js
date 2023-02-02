import {FaBars, FaTimes} from "react-icons/fa";
import {useRef} from "react";

function Navbar(){

    const navReference = useRef();
    const shownavReference = () => {
        navReference.current.classList.toggle("responsive-nav")
    }
    return (
        <header id="home">
            <h3>MART</h3>
            <nav ref={navReference}>
                <a href="#data" >Ingresar datos</a>
                <a href="#schedule" >Horario</a>
                <a href="#sesion" >Ingresar</a>
                <button className="nav-btn  nav-close-btn" onClick={shownavReference}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={shownavReference}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;