import React from 'react'

function Select(props) {
  let centros = props.ListaCentro.map((centro,index)=><option>Centro {index}</option>)
  return (
    <select
      className="form-select mb-4 shadow-sm p-3 mb-3 bg-body rounded"
      aria-label="Default select example"
      value={props.CentroSeleccionado}
      onChange={(e)=>{console.log(e.target.value)}}
    >
      <option>Centros Medicos</option>
      {centros}
    </select>
  );
}

export default Select