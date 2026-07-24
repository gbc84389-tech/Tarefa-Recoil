import { useSetRecoilState } from "recoil";
import Lista from "../atoms/ListadeTarefas";
import { useState } from "react";

export default function Input() {
  const setList = useSetRecoilState(Lista);
  const [tarefa, setTarefa] = useState('');

  const handleClick = (e) => {
    const novaTarefa = ({
        id: Date.now(),
        tarefa: tarefa,
        concluida: false
    })

    e.preventDefault();

    if (tarefa === "" || tarefa.trim() === "") {
      alert("Input nao pode estar vazio");
      setTarefa("");
    } else {
      setList((prev) => [...prev, novaTarefa]);
      setTarefa("");
    }
};

  const handleChange = (e) => {
    setTarefa(e.target.value);
  };

  return (
    <form>
      <input type="text" onChange={handleChange} value={tarefa} />
      <button onClick={handleClick}>Adicionar</button>
    </form>
  );
}
