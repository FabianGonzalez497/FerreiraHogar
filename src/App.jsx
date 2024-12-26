import { ItemListContainer } from "./components/ItemListContainer"
import { Button } from "./components/button/Button"
import { NavBar } from "./components/nav/NavBar"

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={'hola a todos'}/>
    </>
  )
}

export default App
