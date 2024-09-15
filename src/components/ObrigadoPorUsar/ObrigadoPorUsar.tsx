import { useNavigate } from 'react-router-dom';
import styles from './ObrigadoPorUsar.module.css';

const ObrigadoPorUsar = () => {
    const navigate = useNavigate();

    const voltarMenu = () => {
        navigate('/menu');
    };

    return (
        <div className={styles.thanks}>
            <h1 className={styles.titulo}>Obrigado por usar a DIAGNOSCAR!</h1>
            <button className={styles.botao} onClick={voltarMenu}>
                Voltar ao Menu
            </button>
        </div>
    );
};

export default ObrigadoPorUsar;
