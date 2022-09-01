import moment from 'moment';
import React from 'react'

function Calendar(props) {
  return (
    <div
    className="offcanvas offcanvas-end"
    data-bs-scroll="false"
    data-bs-backdrop="true"
    tabIndex="-1"
    id="offcanvasRightCalendar"
    aria-labelledby="offcanvasRightLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasRightLabelCalendar">
          Fecha
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body small">
        <h6 className="ml-3 form-control-placeholder pb-2">Fecha Inicial</h6>
        <input type="date" id="start" className="form-control text-left mr-2" value={props.Fechas.inicial} onChange={(e)=>{props.setFechas({...props.Fechas,inicial:e.target.value})}}/>
        <h6 className="ml-3 form-control-placeholder pb-2 pt-2">Fecha Final</h6>
        <input type="date" id="end" className="form-control text-left ml-2" value={props.Fechas.final} onChange={(e)=>{props.setFechas({...props.Fechas,final:e.target.value})}}/>
      </div>
    </div>
  );
}

export default Calendar
