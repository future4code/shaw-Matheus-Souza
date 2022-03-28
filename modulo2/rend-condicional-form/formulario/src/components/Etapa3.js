import styled from "styled-components";

const Container3 = styled.div`
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

function Etapa3() {
  return (
    <Container3>
      <h2>Etapa 3 - Informações Gerais de ensino</h2>
      <p>5 - Por que você não terminou um curso de graduação?</p>
      <input></input>
      <p>6 - Você fez algum curso complementar?</p>
      <select>
          <option>Curso técnico</option>
          <option>Cursos de inglês</option>
          <option>Não fiz curso complementar</option>
      </select>
    </Container3>
  );
}

export default Etapa3;