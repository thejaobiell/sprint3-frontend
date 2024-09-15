import { useEffect, useState } from 'react';
import "./RelatorioDiagnoscar.css";

const RelatorioDiagnoscar = () => {

    useEffect(() => {
        document.title = "Inicio do Pré-Diagnóstico";
    }, []);

    const [showChat, setShowChat] = useState(false);

    const toggleChat = () => {
        setShowChat(!showChat);
    };

    return (
        <>
            <div className="informacoes">
                <h2>Informações: </h2>
                <h4>Marca: XXXXX</h4>
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
                <button className="butao">Chamar o Guincho</button>
                <button className="butao">Oficinas Porto Perto de você</button>
            </div>

            <div className="solobotao">
                <button className="butao" onClick={toggleChat}>Chat</button>
            </div>

            {showChat && (
                <div className="chat-container">
                    <button className="fechar-chat" onClick={toggleChat}>X</button>
                    <div className="chat-box">
                        <p>Chat em progresso...</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default RelatorioDiagnoscar;
