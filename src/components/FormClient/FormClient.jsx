import React,{useEffect, useState} from 'react'
import FireBase from '../../Clases/Firebase'
import AlertDanger from '../Alerts/AlertDanger';
import AlertSuccess from '../Alerts/AlertSuccess';
import Loading from '../LoadingEffect/Loading';

function FormClient() {
  //----//--Efecto carga y mensaje success--//----//
  const [spinner, setSpinner] = useState(false);
  const [Success, setSuccess] = useState(false);
  const [Danger, setDanger] = useState(false);
  //----//--Mensaje a mostrar--//----//
  //----//--Useeffect para efecto loading--//----//
  const [Procesando, setProcesando] = useState(false)
  //----//----//----//

  const [Cliente, setCliente] = useState(
    {
      Nombre: "",
      Ciudad: "",
      url: "",
      LimiteInicial:0,
      MontoInicial:0,
      Exedente:0
    }
  )
  
  let cambiardatos = (e)=>{
    if(e.target.name === "LimiteInicial" || e.target.name === "MontoInicial" || e.target.name === "Exedente"){
      let valor = isNaN(parseInt(e.target.value))?0:parseInt(e.target.value)
      let target = e.target.name
      let a = Cliente
      a[target] = valor
      setCliente({...a})
    }else{
      let valor = e.target.value
      let target = e.target.name
      let a = Cliente
      a[target] = valor
      setCliente({...a})
    }
  }
  let guardar = async ()=>{
    setSpinner(true)
    let registro = await FireBase.SetCliente(Cliente)
    setSpinner(false)
    setProcesando(true)
    if(registro){
      setCliente(
        {
          Nombre: "",
          Ciudad: "",
          url: "",
          LimiteInicial:0,
          MontoInicial:0,
          Exedente:0
        }
      )
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
    setProcesando(false)
  }
  return (
    <div
      className="offcanvas offcanvas-start"
      data-bs-scroll="false"
      data-bs-backdrop="true"
      tabIndex="-1"
      id="offcanvasScrolling"
      aria-labelledby="offcanvasScrollingLabel"
    >
      {Success&&<AlertSuccess/>}
      {Danger&&<AlertDanger/>}
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
            value={Cliente.Nombre}
            name="Nombre"
            onChange={cambiardatos}
          />
          <label htmlFor="floatingInput">Nombre</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Ciudad"
            required
            value={Cliente.Ciudad}
            name="Ciudad"
            onChange={cambiardatos}
          />
          <label htmlFor="floatingInput">Ciudad</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="URL"
            required
            value={Cliente.url}
            name="url"
            onChange={cambiardatos}
          />
          <label htmlFor="floatingInput">URL</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Limite Inicial"
            required
            value={Cliente.LimiteInicial.toString()}
            name="LimiteInicial"
            onChange={cambiardatos}
          />
          <label htmlFor="floatingInput">Limite Inicial</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Monto Inicial"
            required
            value={Cliente.MontoInicial.toString()}
            name="MontoInicial"
            onChange={cambiardatos}
          />
          <label htmlFor="floatingInput">Monto Inicial</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Excedente"
            required
            value={Cliente.Exedente.toString()}
            name="Exedente"
            onChange={cambiardatos}
          />
          <label htmlFor="floatingInput">Excedente</label>
        </div>
        <div className="d-grid gap-2 mx-auto text-center pt-3">
          <button className="color-button" onClick={guardar}  disabled={Procesando}>
            <ion-icon name="save-outline"></ion-icon> Crear Nuevo
          </button>
        </div>
      </div>
      {spinner&&<Loading/>}
    </div>
  );
}

export default FormClient
