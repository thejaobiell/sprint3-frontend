import { useEffect } from 'react';
import './Menu.css';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
    useEffect(() => {
        document.title = "Menu - Diagnoscar";
    }, []);

    const navigate = useNavigate();
    const loginou = () => {
    navigate('/login');
    };

    return (
        <>
            <section className="sectionMenu">
                <div className="fundoContainer">
                    <img className="fundo" src="/img/fundo.png" alt="Foto de Fundo" />
                    <article className="botaoEtexto">
                        <h1 className='texto'>
                            A inteligência artificial da Porto Seguro que irá fazer um pré-diagnóstico do seu carro antes dele ir para oficina
                        </h1>
                        <button className="botao" onClick={loginou}>Iniciar Pré-Diagnóstico</button>
                    </article>
                </div>
            </section>
        </>
    );
};

export default Menu;
