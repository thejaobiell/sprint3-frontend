import { useNavigate } from 'react-router-dom';
import "./ObrigadoPorUsar.css"


const ObrigadoPorUsar= () => {
        const navigate = useNavigate();

    const voltarMenu = () => {
        navigate('/menu');
    };

    return (
        <>
        <div className='thanks'>
            <h1 className='titulo'>Obrigado por usar a DIAGNOSCAR!</h1>
            <button className='botao' onClick={voltarMenu}>
                Voltar ao Menu
            </button>
        </div>
        </>

    );
};

export default ObrigadoPorUsar;