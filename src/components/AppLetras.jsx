import Alerta from "./Alerta"
import Letra from "./Letra"
import Formulario from "./Formulario"
import useLetras from "../hooks/useLetras"

const AppLetras = () => {

  const { alerta, letra, cargando } = useLetras()

  return (
    <>
    <header>BUSCADOR DE CANCIONES</header>
    
    <Formulario />
    
    <main>
      
      { alerta ? <Alerta>{alerta}</Alerta> : 
        letra ? <Letra/> : 
        cargando ? "Cargando..." :
        <p className="text-center">Buscar Letras de tus Artistas</p> 
      } 
    </main>

    </>
  )
}
export default AppLetras
