import React, { useEffect, useState } from 'react'
import Items from '../Items/Items';
import ItemsTotal from '../ItemsTotal/ItemsTotal';
import Select from '../Select/Select';
import './Main.css'
import BuscarEstudio from './BuscarEstudio'
//import ExportExcel from '../Exports/Excel'
import ExportExcel from '../Exports/ExportExcel'
import * as XLSX from 'xlsx';
import { async } from '@firebase/util';
function main(props) {
  const Inicial = {
    Nombre: "",
    Ciudad: "",
    url: "",
    LimiteInicial: 0,
    MontoInicial: 0,
    Exedente: 0,
    Activo: true,
    id: "",
  };
  //----//----//-4403---//
    const [Datos, setDatos] = useState(Inicial)
    const [Estudios, setEstudios] = useState(null)
  
    const handleExportExcel = async () => {
      const excel = await ExportExcel(Datos, props.Fechas)
      
      console.log(excel)
      //--//--//--//--//
      var wb = XLSX.utils.book_new(), ws = XLSX.utils.json_to_sheet(excel);
      XLSX.utils.book_append_sheet(wb, ws, "Datos");
      XLSX.writeFile(wb, `Reporte ${Date()}.xlsx`);
    };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-4 pt-4">
          <Select {...props} setDatos={setDatos}/>
        </div>
      </div>

      <div className='row'>
        <div className="col-sm-12 col-md-4 col-lg-4">
          <h3 className='text-center'>Cantidad de Estudios:</h3>
        </div>
      </div>

      <div className='row'>
        <Items Estudios={Estudios}/>
      </div>

      <div className='row'>
        <ItemsTotal Estudios={Estudios} Datos={Datos}/>
      </div>

      <div className="row">
        <div className="d-grid gap-2 text-center col-sm-12 col-md-4 col-lg-4 pt-4">
          <button className="color-button" onClick={async()=>{setEstudios(await BuscarEstudio(Datos, props.Fechas))}}>
          <ion-icon name="search-outline"></ion-icon> Buscar
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-4 pt-4 d-grid gap-2 text-center pb-4">
          <button className="color-button" onClick={handleExportExcel}>
          <ion-icon name="cloud-download-outline"></ion-icon> Descargar
          </button>
        </div>
      </div>
    </div>
  );
}

export default main
