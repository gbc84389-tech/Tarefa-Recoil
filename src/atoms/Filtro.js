import { atom } from "recoil";

const Filtro = atom ({
    key: 'filtro',
    default: ("todas"),
});

export default Filtro;