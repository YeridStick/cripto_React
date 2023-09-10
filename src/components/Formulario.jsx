import React, { useEffect, useState } from 'react'
import { monedas } from '../data/monedas.js'

import useSelectMonedas from '../hooks/useSelectMonedas'
import Mensaje from './Mensaje.jsx'

export default function Formulario({ setMonedas }) {
  const [cripto, setCripto] = useState([])
  const [mensaje, setMensaje] = useState(false)

  const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu Moneda', monedas)
  const [monedaCrito, SelectCripto] = useSelectMonedas('Elige tu Criptomoneda', cripto);
  
  useEffect(()=>{
    const consultarAPI = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull??limit=20&tsym=USD"
      const respuesta = await fetch(url) //Me trae una respuesta
      const resultado = await respuesta.json() //Convierto esa respuesta
      //console.log(resultado)
      const arrayCriptos = resultado.Data.map(element => {
        const objetoCripto = {
          id: element.CoinInfo.Name,
          nombre: element.CoinInfo.FullName
        }
        return objetoCripto
      })
      setCripto(arrayCriptos)
    }
    consultarAPI()
  },[])

  const handelForm = (e) => {
    e.preventDefault()
    if([moneda, monedaCrito].includes("")) {
      setMensaje(true)
    }else{
      setMensaje(false)
      setMonedas({
        moneda,
        monedaCrito
      })
    }
  }


  return (
    <form onSubmit={handelForm} className="form__container">
      {
        mensaje && <Mensaje/>
      }
      <div className="form__campo">
        <SelectMonedas />
      </div>
      <div className="form__campo">
        <SelectCripto />
      </div>
      <input className='form__submit' type="submit" value="Cotizar"/>
    </form>
  )
}
