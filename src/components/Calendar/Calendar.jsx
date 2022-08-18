import React from 'react'

function Calendar() {
  return (
    <div
      className="offcanvas offcanvas-bottom"
      tabIndex="-1"
      id="offcanvasBottom"
      aria-labelledby="offcanvasBottomLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasBottomLabel">
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
        <input type="date" id="start" className="form-control text-left mr-2" />
        <h6 className="ml-3 form-control-placeholder pb-2 pt-2">Fecha Final</h6>
        <input type="date" id="end" className="form-control text-left ml-2" />
      </div>
    </div>
  );
}

export default Calendar
