import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    
    const navigate = useNavigate();

    const bmenu = () => {
    navigate('/menu');
    };
    
    return (
        <header>
                <img id="logo" src="img/portoLogo/Porto Seguro1.png" alt="Logo porto" onClick={bmenu}/>
            <h1 id="Diagnoscar">
                <span className="black">Diagnos</span> <span className="blue">Car</span>
            </h1>
            <nav>
                <ul>
                    <li><Link to="/Menu">Menu</Link></li>
                    <li><Link to="/membros">Membros</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
