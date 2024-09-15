import { useEffect, useState } from 'react';
import './Oficinas.css';
import { useNavigate } from 'react-router-dom';

const Oficinas = () => {
  const navigate = useNavigate();

  const confirmed = () => {
    navigate('/Obrigado');
  };

  const voltarrelatorio = () => {
    navigate('/relatoriodiagnoscar');
  };

  useEffect(() => {
    document.title = "Oficinas Perto";
  }, []);

  const [oficinaSelecionada, setOficinaSelecionada] = useState<string | null>(null);

  const handleConfirm = () => {
    if (oficinaSelecionada) {
      alert(`Você escolheu a oficina: ${oficinaSelecionada}`);
      confirmed(); // Navigate to the next page after confirming selection
    } else {
      alert('Por favor, selecione uma oficina.');
    }
  };

  const handleCancel = () => {
    setOficinaSelecionada(null);
    alert('Seleção cancelada.');
    voltarrelatorio();
  };

  return (
    <div className="containera">
      <h1>Escolha uma Oficina</h1>
      <div className="workshops">
        <label>
          <input
            type="radio"
            name="workshop"
            value="Oficina 1"
            checked={oficinaSelecionada === 'Oficina 1'}
            onChange={(e) => setOficinaSelecionada(e.target.value)}
          />
          Oficina de Criatividade
        </label>
        <label>
          <input
            type="radio"
            name="workshop"
            value="Oficina 2"
            checked={oficinaSelecionada === 'Oficina 2'}
            onChange={(e) => setOficinaSelecionada(e.target.value)}
          />
          Oficina de Programação
        </label>
        <label>
          <input
            type="radio"
            name="workshop"
            value="Oficina 3"
            checked={oficinaSelecionada === 'Oficina 3'}
            onChange={(e) => setOficinaSelecionada(e.target.value)}
          />
          Oficina de Design
        </label>
      </div>
      <div className="botaos1">
        <button onClick={handleConfirm}>Confirmar</button>
        <button onClick={handleCancel}>Cancelar</button>
      </div>
    </div>
  );
};

export default Oficinas;
