import {FaBars, FaTimes} from "react-icons/fa";
import {useRef} from "react";
import { AiOutlineUserAdd } from "react-icons/ai";

function Navbar(){

    const navReference = useRef();
    const shownavReference = () => {
        navReference.current.classList.toggle("responsive-nav")
    }
    return (
        <header id="home">
            <h3>MART</h3>
            <nav ref={navReference}>
                <button className="nav-btn  nav-close-btn" onClick={shownavReference}>
                    <FaTimes />
                </button>
                <a href="#sesion" ><AiOutlineUserAdd />Iniciar Sesión</a>
            </nav>
            <button className="nav-btn" onClick={shownavReference}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;