import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`


class App extends React.Component {
    state = {
      tarefas: [

      ],
      inputValue: '',
      filtro: '',
    }
    
  componentDidUpdate() {
   
  };

  componentDidMount() {
    this.buscaStorage()
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value}); 
  }

  criaTarefa = () => {
    const novaTarefa = {
      id : Date.now(),
      texto: this.state.inputValue,
      completa: true,
    };
    const novaLista = [novaTarefa, ...this.state.tarefas];

    this.setState({tarefas: novaLista});
    this.setState({inputValue: ""});

    localStorage.setItem("tarefas", JSON.stringify(novaLista))
  }
  // excluiTarefa = (id) => { // tentei desenvolver a ideia mas não deu certo
  //   const excluiListaTarefa = this.state.tarefas.filter((tarefa) =>{
  //     if(id === tarefa.id){ //Se o id da tarefa clicada for diferente ao id da lista de tarefas, então a tarefa será passada para nova lista
  //       const tarefaExcluida = {
  //         ...tarefa.splice(id,1), // copia a lista de tarefas original
  //       }
  //       return tarefaExcluida
  //     } else {
  //       return tarefa
  //     }
  //   })
  //   this.setState({tarefas: excluiListaTarefa})
  //   localStorage.setItem("tarefas", JSON.stringify(excluiListaTarefa)) 
  // }

  buscaStorage = () => { // função criada para ser chamada no componentDidMount
    const listaGuardada = localStorage.getItem("tarefas")
    const tarefasObjeto = JSON.parse(listaGuardada)
    if (tarefasObjeto !== null){
      this.setState({tarefas: tarefasObjeto})
    }
  }

  selectTarefa = (id) => { //não é possivel aterar um objeto dentro de um array de forma direta, por isso usamos esse método
    const novaListaTarefa = this.state.tarefas.map((tarefa) =>{
      if(id === tarefa.id){ //Se o id da tarefa clicada for igual ao id da lista de tarefas, então essa tarefa será pega para alteração
        const tarefaInvert = {
          ...tarefa, // copia a lista de tarefas original
          completa: !tarefa.completa // e inverte o estado de completo
        }
        return tarefaInvert
      } else {
        return tarefa
      }
    })
    this.setState({tarefas: novaListaTarefa})

    localStorage.setItem("tarefas", JSON.stringify(novaListaTarefa))
  }

  onChangeFilter = (event) => { // ao mudar a escolha de filtro
    this.setState({filtro: event.target.value}); // ira renderizar a lista que conter o valor de filtro escolhidio
  }

  render() {
    let listaFiltrada = [];
    if(this.state.tarefas){
      listaFiltrada = this.state.tarefas.filter((tarefa) => {
        switch (this.state.filtro) {
          case 'pendentes':
            return !tarefa.completa
          case 'completas':
            return tarefa.completa
          default:
            return true
        }
      })
    }
     

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} onKeyPress={event => {
                if(event.key === 'Enter') {
                  this.criaTarefa()
                }}}
                />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
                // onDoubleClick={() => this.excluiTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
