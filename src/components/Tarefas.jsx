import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import Lista from "../atoms/ListadeTarefas";
import listaFiltrada from "../selectors/VerifyTarefas";
import { ContainerLista } from "../Styles/Styles-tarefas";

export default function Tarefas() {
  const [lista, setLista] = useRecoilState(Lista);
  const listafiltrada = useRecoilValue(listaFiltrada);

  const handleExcluir = (id) => {
    const novaLista = lista.filter((retorno) => id !== retorno.id);
    setLista(novaLista);
  };

  const handleEditar = (id) => {
    const tarefaAtual = lista.find((item) => item.id === id)
    const edicao = prompt("Edite a tarefa", tarefaAtual.tarefa);
    if (edicao === null || edicao === "" || edicao.trim() === "") {
      alert("Erro - acao cancelada/input vazio");
      return;
    }

    const novaLista = lista.map((retorno) => {
      return retorno.id === id ? { ...retorno, tarefa: edicao } : retorno;
    });
    setLista(novaLista);
  };
  const handleCheck = (id) => {
    const novaLista = lista.map((retorno) => {
      if (retorno.id === id) {
        return { ...retorno, concluida: !retorno.concluida };
      } else {
        return retorno;
      }
    });
    setLista(novaLista);
  };

  

  return (
    <ContainerLista $ativo = {listafiltrada.length}>
      {listafiltrada.map((tarefa) => (
        <li key={tarefa.id}>
          <input
            type="checkbox"
            onChange={() => handleCheck(tarefa.id)}
            checked={tarefa.concluida}
          />
          <p>{tarefa.tarefa}</p>
          <button onClick={() => handleEditar(tarefa.id)} style={{backgroundColor: '#e09f3eb1'}}>Editar</button>
          <button onClick={() => handleExcluir(tarefa.id)} style={{backgroundColor: '#c1121eb1'}}>Excluir</button>
        </li>
      ))}
    </ContainerLista>
  );
}
