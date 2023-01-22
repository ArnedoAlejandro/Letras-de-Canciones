import useLetras from '../hooks/useLetras'
import { useState } from "react"

const Formulario = () => {
//--VALOR INICIAL DE LA BUSQUEDA DEL FORMULARIO
    const [ busqueda, setBuqueda ] = useState({
        artista : "",
        cancion :  ""
    })
    const { setAlerta, busquedaLetras } = useLetras()


//EVENTO DE VALIDACION DEL FORMULARIO 
    const handleSubmit = ( e ) => {
        e.preventDefault()
        
        if(Object.values(busqueda).includes("")){
            setAlerta("Colaca el nombre del Artista y Cancion")
            return
        }
        busquedaLetras(busqueda)
       
    }

  return (
    <form onSubmit={handleSubmit}>

        <legend>Busca por Artista y Cancion </legend>

        <div className="form-grid">
           <div>
            
            <label>Artista</label>
            
            <input 
                type="text"
                name='artista'
                placeholder="Nombre de Artista"
                value={busqueda.artista}
//--------------METODO ONCHANGE QUE TOME EL VALOR DEL OBJETO
                onChange={ e => setBuqueda({
                    ...busqueda,
                    [e.target.name] : e.target.value
                })}
            />

           </div>
           
           <div>
            
            <label>Cancion</label>
            
            <input 
                type="text"
                name='cancion'
                placeholder="Nombre de la canción"
                value={busqueda.cancion}
//--------------METODO ONCHANGE QUE TOME EL VALOR DEL OBJETO
                onChange={ e => setBuqueda({
                    ...busqueda,
                    [e.target.name] : e.target.value
                }) }
            />

           </div>

           <input type="submit" value="BUSCAR"
            />
        </div>

    </form>
    
  )
}

export default Formulario

