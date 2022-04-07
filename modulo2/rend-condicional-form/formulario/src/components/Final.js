import styled from "styled-components";

const ContainerFinal = styled.div`
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

function Final() {
  return (
    <ContainerFinal>
      <h2>O formulário acabou</h2>
      <p>Obrigado pela participação! Em breve enviaremos resposta!</p>
    </ContainerFinal>
  );
}

export default Final;