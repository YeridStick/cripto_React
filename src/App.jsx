import { useEffect, useState } from 'react'
import ImagenCripto from "./assets/img/imagen-criptos.png"
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Loader from './helpers/Loader'

function App() {
  const [isLoader, setIsLoader] = useState(false)
  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado] = useState({})

  useEffect(()=>{
    //Consultar en la api 
    if(Object.keys(monedas).length > 0){
      setIsLoader(true)
      const cotizarCripto = async () => {
        //Extraemos variables del objeto
        const {moneda, monedaCrito} = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${monedaCrito}&tsyms=${moneda}`
        const respuesta = await fetch(url) //Me trae una respuesta
        const resultado = await respuesta.json() //Convierto esa respuesta
        setResultado(resultado.DISPLAY[monedaCrito][moneda])//[] toma como variable no propiedades de objeto
        setIsLoader(false)
      }
      cotizarCripto()
    }
  },[monedas])

  return (
    <div className="layout">
      <section className="layout__img">
        <img className="img__cripto" src={ImagenCripto} alt="Imagen Cripto" />
      </section>
      <section className="layout__form">
        <h1 className="layout__titel">
          <span className="layout__titel-noWrap">Contiza Criptomonedas al</span>
          <span className="layout__titel-efect">Instante</span>
        </h1>
        <Formulario
          setMonedas={setMonedas}
        />
        {
          isLoader ? <Loader/> : (Object.keys(resultado).length > 0 && <Resultado resultado={resultado} isLoader={isLoader} />)
        }
      </section>
    </div>
  )
}

export default App
