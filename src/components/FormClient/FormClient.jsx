import React from 'react'

function FormClient() {
  return (
    <div
      className="offcanvas offcanvas-start"
      data-bs-scroll="true"
      data-bs-backdrop="false"
      tabIndex="-1"
      id="offcanvasScrolling"
      aria-labelledby="offcanvasScrollingLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
          Nuevo Registro de Cliente
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
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Nombre"
            required
          />
          <label htmlFor="floatingInput">Nombre</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Ciudad"
            required
          />
          <label htmlFor="floatingInput">Ciudad</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="URL"
            required
          />
          <label htmlFor="floatingInput">URL</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Limite Inicial"
            required
          />
          <label htmlFor="floatingInput">Limite Inicial</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Monto Inicial"
            required
          />
          <label htmlFor="floatingInput">Monto Inicial</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Excedente"
            required
          />
          <label htmlFor="floatingInput">Excedente</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Activo"
            required
          />
          <label htmlFor="floatingInput">Activo</label>
        </div>
        <div className="d-grid gap-2 mx-auto text-center pt-3">
          <button className="btn color-button text-white mb-2">
            <ion-icon name="save-outline"></ion-icon> Crear Nuevo
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormClient
