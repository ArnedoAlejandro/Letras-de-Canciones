import {LetrasProvider} from "./context/LetrasProvider"
import AppLetras from "./components/AppLetras"

function App() {


  return (
    
    <LetrasProvider>
      <AppLetras/>
    </LetrasProvider>
  
  )
}

export default App
