import React from 'react'
import Select from '../Select/Select';

function FormEditClient(props) {
  let buscarEstudios = ()=>{
    console.log(props.Fechas)
  }
  return (
    <div
      className="offcanvas offcanvas-end"
      data-bs-scroll="false"
      data-bs-backdrop="true"
      tabIndex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasRightLabel">
          Editar Cliente
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <div className="form-floating">
          <Select {...props} />
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Nombre"
            required
            // value={Cliente.Nombre}
            name="Nombre"
            // onChange={cambiardatos}
          />
          <label htmlFor="floatingInput">Nombre</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Ciudad"
            required
            // value={Cliente.Ciudad}
            name="Ciudad"
            // onChange={cambiardatos}
          />
          <label htmlFor="floatingInput">Ciudad</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="URL"
            required
            // value={Cliente.url}
            name="url"
            // onChange={cambiardatos}
          />
          <label htmlFor="floatingInput">URL</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Limite Inicial"
            required
            // value={Cliente.LimiteInicial.toString()}
            name="LimiteInicial"
            // onChange={cambiardatos}
          />
          <label htmlFor="floatingInput">Limite Inicial</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Monto Inicial"
            required
            // value={Cliente.MontoInicial.toString()}
            name="MontoInicial"
            // onChange={cambiardatos}
          />
          <label htmlFor="floatingInput">Monto Inicial</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Excedente"
            required
            // value={Cliente.Exedente.toString()}
            name="Exedente"
            // onChange={cambiardatos}
          />
          <label htmlFor="floatingInput">Excedente</label>
        </div>
        <div className="d-grid gap-2 mx-auto text-center pt-3">
          <button className="color-button">
            <ion-icon name="build-outline"></ion-icon> Actualizar
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormEditClient

