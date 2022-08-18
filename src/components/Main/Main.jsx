import React from 'react'
import './Main.css'

function main() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-4 pt-4">
          <select
            className="form-select mb-4 shadow-sm p-3 mb-3 bg-body rounded"
            aria-label="Default select example"
          >
            <option>Centros Medicos</option>
            <option>Centro 1</option>
            <option>Centro 2</option>
            <option>Centro 3</option>
          </select>
        </div>
        <div className='col-sm-12 col-md-8 col-lg-8'></div>
        <div className="col-sm-12 col-md-4 col-lg-4">
          <h3 className='text-center'>Cantidad de Estudios:</h3>
        </div>
        <div className='col-sm-12 col-md-8 col-lg-8'></div>
        <div className="col-sm-12 col-md-4 col-lg-4 pt-4">
          <p>Rayos X:  ####Bs.</p>
          <p>Tomografías:  ####Bs.</p>
          <p>Resonancias:  ####Bs.</p>
        </div>
        <div className='col-sm-12 col-md-8 col-lg-8'></div>
        <div className="col-sm-12 col-md-4 col-lg-4 pt-4">
          <p>Estudios Excedidos:  ####Bs.</p>
          <p>Costo Base:  ####Bs.</p>
          <h4>Costo Toal:  ####Bs.</h4>
        </div>
        <div className='col-sm-12 col-md-8 col-lg-8'></div>
        <div className="d-grid gap-2 mx-auto text-center col-sm-12 col-md-4 col-lg-4 pt-4">
          <button className="btn color-button text-white mb-2">
          <ion-icon name="search-outline"></ion-icon> Buscar
          </button>
        </div>
        <div className='col-sm-12 col-md-8 col-lg-8'></div>
        <div className="col-sm-12 col-md-4 col-lg-4 pt-4 d-grid gap-2 mx-auto text-center ">
          <button className="btn color-button text-white mb-2">
          <ion-icon name="cloud-download-outline"></ion-icon> Descargar
          </button>
        </div>
        <div className='col-sm-12 col-md-8 col-lg-8'></div>
      </div>
    </div>
  );
}

export default main
