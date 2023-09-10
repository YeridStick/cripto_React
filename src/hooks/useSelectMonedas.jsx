import React, { useState } from 'react'

export default function useSelectMonedas(label, opciones) {
  const [state, setState] = useState("")
  const SelectMonedas = () => (
    <>
      <label className='form__campo-label'>{label}</label>
      <select 
        className='form__campo-select'
        value={state}
        onChange={(e)=>setState(e.target.value)}
      >
        <option value="">Seleccion</option>
        {
          opciones.map( opcion => (
            <option
              key={opcion.id}
              value={opcion.id}
            >
              {opcion.nombre}
            </option>
          ))
        }
      </select>
    </>
  )
  return [ state, SelectMonedas ]
}
