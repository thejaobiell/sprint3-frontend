import { useEffect } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    useEffect(() => {
        document.title = "Login - Diagnoscar";
    }, []);

    const navigate = useNavigate();
    const loginou = () => {
    navigate('/escolhacarro');
    };
    const cadastrar = () => {
    navigate('/cadastro');
    };
    

    return (
        <section>
            <form id="LOGIN">
                <label htmlFor="txtEmail">
                    <h4>Email:</h4>
                    <br />
                    <input type="email" name="txtEmail" id="txtEmail" placeholder="Digite seu email" />
                </label>
                <br />

                <label htmlFor="txtCNH_CPF_RG">
                    <h4>CNH/CPF/RG:</h4>
                    <br />
                    <input type="text" id="txtCNH_CPF_RG" name="txtCNH_CPF_RG" placeholder="Digite o CNH ou CPF ou RG" />
                </label>
                <br />
                <button id="botao" onClick={loginou}>Entrar</button>

                <button id="botao" onClick={cadastrar}>Fazer Cadastro</button>
            </form>
        </section>
    );
};

export default Login;
