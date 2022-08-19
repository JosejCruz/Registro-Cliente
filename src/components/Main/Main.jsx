import React from 'react'
import Items from '../Items/Items';
import ItemsTotal from '../ItemsTotal/ItemsTotal';
import Select from '../Select/Select';
import './Main.css'

function main() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-4 pt-4">
          <Select/>
        </div>
        <div className='col-sm-12 col-md-8 col-lg-8'></div>
        <div className="col-sm-12 col-md-4 col-lg-4">
          <h3 className='text-center'>Cantidad de Estudios:</h3>
        </div>
        <div className='col-sm-12 col-md-8 col-lg-8'></div>
        <Items/>
        <div className='col-sm-12 col-md-8 col-lg-8'></div>
        <ItemsTotal/>
        <div className='col-sm-12 col-md-8 col-lg-8'></div>
        <div className="d-grid gap-2 mx-auto text-center col-sm-12 col-md-4 col-lg-4 pt-4">
          <button className="color-button">
          <ion-icon name="search-outline"></ion-icon> Buscar
          </button>
        </div>
        <div className='col-sm-12 col-md-8 col-lg-8'></div>
        <div className="col-sm-12 col-md-4 col-lg-4 pt-4 d-grid gap-2 mx-auto text-center ">
          <button className="color-button">
          <ion-icon name="cloud-download-outline"></ion-icon> Descargar
          </button>
        </div>
        <div className='col-sm-12 col-md-8 col-lg-8'></div>
      </div>
    </div>
  );
}

export default main
