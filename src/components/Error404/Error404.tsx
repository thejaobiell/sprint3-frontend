import { useEffect } from "react";
import "./Error404.css";

const Error404 = () => {
  useEffect(() => {
    document.title = "Erro 404 - Página Não Encontrada";
  }, []);

  return (
    <>
      <div className="j">
        <h1 className="error">Erro 404</h1>
        <h2 className="mensagem">
          Ops! Infelizmente a página que você tentou acessar não existe.
        </h2>
      </div>
    </>
  );
};

export default Error404;
