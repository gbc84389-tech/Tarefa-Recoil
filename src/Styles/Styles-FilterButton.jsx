import styled from "styled-components";

export const BotaoFiltro = styled.button`
  width: 6rem;
  height: 3rem;
  text-transform: uppercase;
  border: none;
  border-radius: 10px;
  background-color: #ffffe3;
  font-weight: bold;
  will-change: transform;
  transition: 0.2s ease;

  &:hover {
    background-color: #ffffe3bb;
    transform: scale(1.05);
  }
`;