import "./Cadastro.css"; 
const Cadastro = () => {

return (
    <>
    <section className="forms">
    <form>
        <label> Nome Completo: <br /> <input type="text" name="txtNome" id="txtNome" placeholder="Digite seu nome" /> </label>

        <label> Data de nascimento: <br /> <input type="date" name="txtDataNascimento" id="txtNASCIMENTO" min="1900-01-01" max="2006-12-31" /> </label>

        <label>
        Sexo:
        <label> <input type="radio" name="rdoSEXO" id="rdoSEXOM" value="M" />{" "} Masculino </label>

        <label><input type="radio" name="rdoSEXO" id="rdoSEXOF" value="F" />{" "} Feminino </label>

        <label> <input type="radio" name="rdoSEXO" id="rdoSEXO0" value="O" /> Outros </label>

        </label> <br />

        <label>E-Mail: <br /> <input type="email" name="txtEmail" id="txtEMAIL" placeholder="Digite seu e-mail"/> </label>

        <label>Cpf: <br /> <input type="text" id="txtCPF" name="txtcpf" placeholder="Digite o CPF"/> </label>

        <label>RG: <br /> <input type="text" id="txtRG" name="txtrg" placeholder="Digite o RG"/> </label>

        <label>Cnh: <br /> <input type="text" id="txtCNH" name="txtcnh" placeholder="Digite o Cnh"/> </label>

        <label>Celular: <br /> <input type="text" id="txtCEL" name="txtCEL" placeholder="Digite o número de Celular"/> </label>

        <label>Endereço: <textarea name="comentarios" placeholder="Digite o Rua, Número, Bairro, Cidade e Estado. (Nesta Ordem)"></textarea> </label> <br />

        <input type="button" value="Cadastrar" id="botao"/>
    </form>
    </section>
    </>
);
}

export default Cadastro;
