import { selector } from "recoil";
import Filtro from "../atoms/Filtro";
import Lista from "../atoms/ListadeTarefas";

const listaFiltrada = selector({
  key: "listaFiltrada",
  get: ({ get }) => {
    const filtro = get(Filtro);
    const lista = get(Lista);

    if (filtro === "todas") {
        return lista
    } else if (filtro === "pendentes") {
      return lista.filter((tarefa) => tarefa.concluida === false)
    } else {
      return lista.filter((tarefa) => tarefa.concluida === true)
    }
  },
});

export default listaFiltrada;
