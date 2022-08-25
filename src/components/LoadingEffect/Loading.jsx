import { Circles } from "react-loader-spinner";

export default function Loading() {
  return (
    <div
      style={{
        position: "fixed",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Circles color="#00BFFF" height={100} width={100} />
      <h2>Procesando Datos...</h2>
    </div>
  );
}
