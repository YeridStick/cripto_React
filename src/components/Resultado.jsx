import React from 'react'

export default function Resultado({ resultado }) {
  return (
    <div className='layout__result'>
      <h1 className="layout__titel">
        <span className="layout__titel-noWrap">Contizacion <span className='layout__titel-color'>{resultado.TOSYMBOL}</span></span>
      </h1>
      <div className='result_container'>
        <div className='result_containerIMG'>
          <img className='result_img' src={`https://cryptocompare.com/${resultado.IMAGEURL}`} alt="Imagen de la criptomoneda" />
        </div>
        <div className='result__container-text'>
          <p className='result_text'>
            El precio es de: <span className='result_text--color'>{resultado.PRICE}</span>
          </p>
          <p className='result_text'>
            El precio mas alto del dia: <span className='result_text--color'>{resultado.HIGHDAY}</span>
          </p>
          <p className='result_text'>
            El precio mas bajo del dia: <span className='result_text--color'>{resultado.LOWDAY}</span>
          </p>
          <p className='result_text'>
            Variacion última 24 horas: <span className='result_text--color'>{resultado.CHANGEPCT24HOUR}</span>
          </p>
          <p className='result_text'>
            Última Actualización: <span className='result_text--color'>{resultado.LASTUPDATE}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
