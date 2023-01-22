import { useState, createContext } from "react";
import axios from "axios"

const LetrasContext = createContext()

const LetrasProvider = ( { children} ) => {

    const [ alerta, setAlerta ] = useState("")

    const [ letra , setLetra ] = useState("")

    const [ cargando, setCargando ] = useState("")

    //CONSULTA A LA API UTILIZANDO AXIOS 
    const busquedaLetras = async ( busqueda ) =>{
        setCargando(true)    
        try {
            const { artista, cancion } = busqueda
            const url = `http://api.lyrics.ovh/v1/${artista}/${cancion}`
            const { data } = await axios(url)
            setLetra(data.lyrics)
            setAlerta("")
            
            
        } catch (error) {
            setAlerta("No se encontro Resultado")
        }
        setCargando(false)
    }

  return (
        <LetrasContext.Provider   value={{
            alerta,
            setAlerta,
            busquedaLetras,
            letra,
            cargando
        }}>
            {children}
        </LetrasContext.Provider>
  
  
    )
}

export {
    LetrasProvider
}

export default LetrasContext