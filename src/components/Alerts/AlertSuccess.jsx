import React from 'react'

function AlertSuccess() {
  return (
    <div className="alert alert-dismissible alert-success">
      <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
      <strong>¡Bien hecho!</strong> Operación realizado con exito{" "}
      .
    </div>
  );
}

export default AlertSuccess