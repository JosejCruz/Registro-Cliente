import React from 'react'
function TraductorDicom(dato){
  switch (dato) {
    case "DX":
      return "Rayos X";
    case "CR":
      return "Radiografía Computarizada";
    case "CT":
      return "Tomografía computarizada";
    case "MR":
      return "Resonancia magnetica";
    case "US":
      return "Ultrasonido";
    case "BI":
      return "Imágenes biomagnéticas";
    case "CD":
      return "Doppler de flujo de color";
    case "DD":
      return "Doppler dúplex";
    case "MG":
      return "Mamografía";
    case "ES":
      return "endoscopia";
    case "LS":
      return "Escaneo láser de superficie";
    case "SR":
      return "Documento RS";
    case "OT":
      return "Otros";
    default:
      return dato;
  }
}
function Items({Estudios}) {
  console.log(Estudios)
  let items = []
  let total = 0
  if (Estudios != null) {
    const keys = Object.keys(Estudios)
    console.log(keys)
    items = keys.map((key, index) => { total += Estudios[key] 
      return <tr key={key}><th scope="row">{index + 1}</th><td>{TraductorDicom(key)}</td><td>{Estudios[key]}</td></tr>})
  }
  // return <p key={key}>{TraductorDicom(key)}:&nbsp;&nbsp;&nbsp;&nbsp;{Estudios[key]}</p>
  <tr>
      <th scope="row">1</th><td>Mark</td><td>Otto</td><td>@mdo</td>
    </tr>
  return (
    <div className="col-sm-12 col-md-4 col-lg-4 pt-4">
      <table className="table" id='Estudios'>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre de estudio</th>
            <th scope="col">Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {items}
          <tr>
              <td><strong>#</strong></td>
              <td><strong>Total</strong></td>
              <td><strong>{total}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Items