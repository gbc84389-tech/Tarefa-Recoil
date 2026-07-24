import styled from "styled-components";

export const ContainerLista = styled.ul`
  display: ${({ $ativo }) => ($ativo ? "flex" : "none")};
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-height: 100%;
  height: 100%;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  border: 2px dashed #4a4a4a;
  border-radius: 10px;

  &::-webkit-scrollbar {
    display: none;
  }

  li {
    display: grid;
    display: grid;
    grid-template-columns: 40px 1fr 100px 100px;
    align-items: center;
    gap: 1rem;
    background-color: #ffffe3;
    padding: 0.5rem;
    width: 100%;
  }

  li button {
    height: 1.5rem;
    width: 5rem;
    border: none;
    border-radius: 10px;
    text-transform: uppercase;
    font-weight: bold;
    transition: 0.2s ease;
    will-change: transform;
  }

  li button:hover {
    transform: scale(1.1);
  }
`;
