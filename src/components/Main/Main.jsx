import React from 'react'
import Items from '../Items/Items';
import ItemsTotal from '../ItemsTotal/ItemsTotal';
import Select from '../Select/Select';
import './Main.css'

function main(props) {
  let buscarEstudios = ()=>{
    console.log(props.Fechas)
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-4 pt-4">
          <Select {...props}/>
        </div>
      </div>

      <div className='row'>
        <div className="col-sm-12 col-md-4 col-lg-4">
          <h3 className='text-center'>Cantidad de Estudios:</h3>
        </div>
      </div>

      <div className='row'>
        <Items/>
      </div>

      <div className='row'>
        <ItemsTotal/>
      </div>

      <div className="row">
        <div className="d-grid gap-2 text-center col-sm-12 col-md-4 col-lg-4 pt-4">
          <button className="color-button" onClick={buscarEstudios}>
          <ion-icon name="search-outline"></ion-icon> Buscar
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-4 pt-4 d-grid gap-2 text-center ">
          <button className="color-button">
          <ion-icon name="cloud-download-outline"></ion-icon> Descargar
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default main
