import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Select from '../Select/Select';

function FormEditClient(props) {
//--// para actualizar datos--//
const Inicial = {
  Nombre: "",
  Ciudad: "",
  url: "",
  LimiteInicial: 0,
  MontoInicial: 0,
  Exedente: 0,
  Activo: Boolean,
  id: "",
};
//----//----//----//
  const [Datos, setDatos] = useState(Inicial)

  const handleChangeDatos = (e) => {
    const { name, value } = e.target;
    setDatos({...Datos, [name]: value });
  };
//----//----//----//


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
          <Select {...props} setDatos={setDatos}/>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Nombre"
            required
            // value={Cliente.Nombre}
            onChange={handleChangeDatos}
            name="Nombre"
            value={Datos.Nombre}
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
            onChange={handleChangeDatos}
            name="Ciudad"
            value={Datos.Ciudad}
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
            onChange={handleChangeDatos}
            name="url"
            value={Datos.url}
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
            onChange={handleChangeDatos}
            name="LimiteInicial"
            value={Datos.LimiteInicial}
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
            onChange={handleChangeDatos}
            name="MontoInicial"
            value={Datos.MontoInicial}
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
            onChange={handleChangeDatos}
            name="Exedente"
            value={Datos.Exedente}
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

