import { useRecoilState } from "recoil";
import Filtro from "../atoms/Filtro";

import { BotaoFiltro } from "../Styles/Styles-FilterButton";

export default function FilterButton() {
  const [filtro, setFiltro] = useRecoilState(Filtro);

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
    <div>
      <BotaoFiltro onClick={handleFiltro}>{filtro}</BotaoFiltro>
    </div>
  );
}
