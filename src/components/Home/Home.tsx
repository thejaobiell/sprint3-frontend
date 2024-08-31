import './Home.css';
const Home = () => {
    return (
        <>
            <section>
                <div className="fundoContainer">
                    <img className="fundo" src="/img/fundo.png" alt="Foto de Fundo" />
                    <article className="botaoEtexto">
                        <h1>
                            A inteligência artificial da Porto Seguro que irá fazer um pré-diagnóstico do seu carro antes dele ir para oficina
                        </h1>
                        <button className="botao">
                            <a href="escolhercarro.html">Iniciar Pré-Diagnóstico</a>
                        </button>
                    </article>
                </div>
            </section>
        </>
    );
};

export default Home;
