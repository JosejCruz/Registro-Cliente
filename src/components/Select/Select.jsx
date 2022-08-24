import React from 'react'

function Select(props) {
  let centros = props.ListaCentro.map((centro, index) => {
    return(<option key={index}>{centro.Nombre}</option>)
  })
  const selectonChange = (e) => {
    const indice = e.target.options.selectedIndex
    console.log(indice)
    const datos = props.ListaCentro[indice-1]
    console.log(datos)
    props.setDatos(datos)
  }
  return (
    <select
      className="form-select mb-4 shadow-sm p-3 mb-3 bg-body rounded"
      aria-label="Default select example"
      value={props.CentroSeleccionado}
      onChange={selectonChange}
    >
      <option>Centros Medicos</option>
      {centros}
    </select>
  );
}

export default Select