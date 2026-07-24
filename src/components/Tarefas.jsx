import { useRecoilState, useRecoilValue } from "recoil";
import Lista from "../atoms/ListadeTarefas";
import Filtro from "../atoms/Filtro";
import listaFiltrada from "../selectors/VerifyTarefas";

export default function Tarefas() {
  const [lista, setLista] = useRecoilState(Lista);
  const [filtro, setFiltro] = useRecoilState(Filtro);
  const listafiltrada = useRecoilValue(listaFiltrada);

  const handleExcluir = (id) => {
    const novaLista = lista.filter((retorno) => id !== retorno.id);
    setLista(novaLista);
  };

  const handleEditar = (id) => {
    const edicao = prompt("Edite a tarefa");
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

  const handleFiltro = () => {
    if (filtro === "todas") {
      setFiltro("pendentes");
    } else if (filtro === "pendentes") {
      setFiltro("concluidas");
    } else {
      setFiltro("todas");
    }
  };

  return (
    <>
      <div>
        <button onClick={handleFiltro}>{filtro}</button>
      </div>

      {listafiltrada.map((tarefa) => (
        <li key={tarefa.id}>
          <input
            type="checkbox"
            onChange={() => handleCheck(tarefa.id)}
            checked={tarefa.concluida}
          />
          <p>{tarefa.tarefa}</p>
          <button onClick={() => handleEditar(tarefa.id)}>Editar</button>
          <button onClick={() => handleExcluir(tarefa.id)}>Excluir</button>
        </li>
      ))}
    </>
  );
}
