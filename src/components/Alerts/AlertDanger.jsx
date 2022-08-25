import React from 'react'

function AlertDanger() {
  return (
    <div className="alert alert-dismissible alert-danger">
      <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
      <strong>Error!</strong> Se produjo un error, intentelo de nuevo.
    </div>
  );
}

export default AlertDanger