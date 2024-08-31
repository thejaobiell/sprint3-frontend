import './Login.css';

const Login = () => {
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
                    <label>
                        <input type="radio" name="entrarcom" id="entrarcomCPF" value="CNH" /> CNH
                    </label>
                    <label>
                        <input type="radio" name="entrarcom" id="entrarcomCNH" value="CPF" /> CPF
                    </label>
                    <label>
                        <input type="radio" name="entrarcom" id="entrarcomRG" value="RG" /> RG
                    </label>
                    <br />
                    <input type="text" id="txtCNH_CPF_RG" name="txtCNH_CPF_RG" placeholder="Digite o CNH ou CPF ou RG" />
                </label>
                <br />
                <button id="botao">
                    <a href="iniciar.html">Entrar</a>
                </button>
                <button id="botao">
                    <a href="cadastro.html">Fazer Cadastro</a>
                </button>
            </form>
        </section>
    );
};

export default Login;
