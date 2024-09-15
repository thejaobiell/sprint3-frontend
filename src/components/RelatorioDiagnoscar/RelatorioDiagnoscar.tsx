import { useEffect, useState } from 'react';
import "./RelatorioDiagnoscar.css";
import { useNavigate } from 'react-router-dom';

const RelatorioDiagnoscar = () => {

    const navigate = useNavigate();
    const chamarGuincho = () => {
    navigate('/envioGuincho');
    };
    const oficinasParceiras = () => {
    navigate('/*');
    };

    useEffect(() => {
        document.title = "Início do Pré-Diagnóstico";
    }, []);

    const [mostrarChat, setMostrarChat] = useState(false);
    const alternarChat = () => {
        setMostrarChat(!mostrarChat);
    };

    return (
        <>
            <div className="informacoes">
                <h2>Informações: </h2>
                <h4>            Marca: XXXXX</h4>
                <h4>Modelo: xxxxxx</h4>
                <h4>Ano: 0000</h4>
            </div>

            <div className="descricao">
                <h2>Descrição do Problema:</h2>
                <p>...</p>
            </div>

            <div className="pre-diagnostico">
                <h1>Pré-diagnóstico:</h1>
                <p>...</p>
            </div>

            <div className="duplabotao">
                <button className="botao" onClick={chamarGuincho}>Chamar o Guincho</button>
                <button className="botao" onClick={oficinasParceiras}>Oficinas Perto de Você</button>
            </div>

            <div className="solobotao">
                <button className="botao" onClick={alternarChat}>Chat</button>
            </div>

            {mostrarChat && (
                <div className="chat-container">
                    <button className="fechar-chat" onClick={alternarChat}>Sair</button>
                    <div className="chat-box">
                        <p>Chat em Desenvolvimento</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default RelatorioDiagnoscar;
