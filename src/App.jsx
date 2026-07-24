import Input from "./components/Input"
import FilterButton from "./components/FilterButton"
import Tarefas from "./components/Tarefas"
import { GlobalStyle } from "./Styles/GlobalStyles"
import { Container } from "./Styles/Styles-app"

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Container>
        <Input />
        <FilterButton />
        <Tarefas />
      </Container>
    </>
  )
}

export default App
