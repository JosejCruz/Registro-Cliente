import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import FireBase from '../../Clases/Firebase';
import AlertDanger from '../Alerts/AlertDanger';
import AlertSuccess from '../Alerts/AlertSuccess';
import Loading from '../LoadingEffect/Loading';
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
  Activo: true,
  id: "",
};
//----//----//----//
const [spinner, setSpinner] = useState(false);
const [Success, setSuccess] = useState(false);
const [Danger, setDanger] = useState(false);
//----//----//----//
  const [Datos, setDatos] = useState(Inicial)

  const handleChangeDatos = (e) => {
    const { name, value } = e.target;
    if(name === "LimiteInicial" || name === "MontoInicial" || name === "Exedente"){
      setDatos({...Datos, [name]: isNaN(parseInt(value))? 0 : parseInt(value)})
    }else{
      setDatos({...Datos, [name]: value });
    }
  };
//----//----//----//
  const actualizardatos = async () => {
    setSpinner(true)
    const res = await FireBase.actualizaregistro(Datos)
    setSpinner(false)
    if (res) {
      setDatos(Inicial)
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
      }, 5000);
    }else{
      setDanger(true)
      setTimeout(() => {
        setDanger(false)
      }, 5000);
    }
  }
//----//----//----//

  return (
    <div
      className="offcanvas offcanvas-end"
      data-bs-scroll="false"
      data-bs-backdrop="true"
      tabIndex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      {Success&&<AlertSuccess/>}
      {Danger&&<AlertDanger/>}
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
            value={Datos.LimiteInicial.toString()}
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
            value={Datos.MontoInicial.toString()}
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
            value={Datos.Exedente.toString()}
            // onChange={cambiardatos}
          />
          <label htmlFor="floatingInput">Excedente</label>
        </div>
        <div className="d-grid gap-2 mx-auto text-center pt-3">
          <button className="color-button" onClick={actualizardatos}>
            <ion-icon name="build-outline"></ion-icon> Actualizar
          </button>
        </div>
      </div>
      {spinner&&<Loading/>}
    </div>
  );
}

export default FormEditClient

