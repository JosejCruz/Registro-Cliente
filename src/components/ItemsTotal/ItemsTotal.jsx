import React from 'react'
//--//--//--// Costo base: Monto Inicial
//--//--//--// Estudios excedidos: el Total menos el Limite inicial
//--//--//--// Costos excedidos: el excedente por los estudios excedidos
//--//--//--// Costo Total: Monto Inicial mas Costos Excedidos
function ItemsTotal({Estudios, Datos}) {
  let CostoBase = 0;
  let EstudiosExcedidos = 0;
  let CostosExcedidos = 0;
  let CostoTotal = 0;
  let items = []
  let total = 0
  if (Estudios != null && Datos != null) {
    const keys = Object.keys(Estudios)
    console.log(keys)
    items = keys.map((key, index) => { total += Estudios[key]})
    console.log(total)
    CostoBase = Datos.MontoInicial
    EstudiosExcedidos = total < Datos.LimiteInicial ? 0 : total - Datos.LimiteInicial;
    CostosExcedidos = Datos.Exedente * EstudiosExcedidos
    CostoTotal = CostoBase + CostosExcedidos
    console.log(Datos)
    console.log(Estudios)
  }
  return (
    <div className="col-sm-12 col-md-4 col-lg-4 pt-4">
      <table id='Total' className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Dato</th>
            <th scope="col">Costo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Costo Base</td>
            <td>{CostoBase}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Estudios Excedidos</td>
            <td>{EstudiosExcedidos}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Costos Excedidos</td>
            <td>{CostosExcedidos}</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td ><strong>Costo Total</strong></td>
            <td><strong>{CostoTotal}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ItemsTotal