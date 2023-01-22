import { useContext } from "react"
import LetrasContext from "../context/LetrasProvider"


//HOOK DE ALERTA, SETALERTA PROVENIENTE DE (LetrasContext)
const useLetras = () =>{
    return useContext(LetrasContext)
}

export default useLetras