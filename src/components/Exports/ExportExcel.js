import axios from 'axios'
import moment from 'moment'



// {
//     "ID": 178290, 
//     "FECHA": "20220824", //--
//     "NOMBRE": "ESPINOZA^VISCARRA^DANILO", //--
//     "IUD": "14948",
//     "SEXO": "M",
//     "PAS_ID": "014149", //--
//     "EST_UID": "78cc8d63-a6188294-6ab076d3-ee77f343-af319a92",
//     "SERIES": [
//         {
//             "SER_UID": 178291,
//             "SER_ID": "71b5068b-3d277901-35a423f5-9a9b6ee8-53c1795e",
//             "MODALIDAD": "DX", // contar cuantos hay de cada clase // //-- Traducido
//             "NOMBRE": "AP",
//             "FILES": [
//                 {
//                     "POS": "1",
//                     "INS_UID": "e51b556a-9e36-49b7-bb1e-3fe554a3c0cf",
//                     "AE": "MEDICALTECGW"
//                 }
//             ]
//         }
//     ]
// }
function TraductorDicom(dato){
    switch (dato) {
      case "DX":
        return "Rayos X";
      case "CR":
        return "Radiografía Computarizada";
      case "CT":
        return "Tomografía computarizada";
      case "MR":
        return "Resonancia magnetica";
      case "US":
        return "Ultrasonido";
      case "BI":
        return "Imágenes biomagnéticas";
      case "CD":
        return "Doppler de flujo de color";
      case "DD":
        return "Doppler dúplex";
      case "MG":
        return "Mamografía";
      case "ES":
        return "endoscopia";
        case "LS":
        return "Escaneo láser de superficie";
        case "SR":
        return "Documento RS";
        case "OT":
        return "Otros";
      default:
        return dato;
    }
  }


const ExportExcel = async (Cliente, Fechas) => {
  if (Cliente.Nombre != "") {
    console.log("Buscando");
    console.log(Cliente);
    console.log(Fechas);
    const fi = moment(Fechas.inicial, "YYYY-MM-DD").format("YYYYMMDD");
    const ff = moment(Fechas.final, "YYYY-MM-DD").format("YYYYMMDD");
    console.log(fi, ff);
    let datos = await axios.get(
      `${Cliente.url}/getestudios?inicio=${fi}&fin=${ff}`
    );
    console.log(datos.data);
    let est = datos.data;
    let obj = {};
    let array = [];
    est.forEach((e) => {
        var fecha = moment(e.FECHA, "YYYYMMDD").format("DD/MM/YYYY");
        obj.FECHA = fecha;
        obj.NOMBRE = e.NOMBRE;
        obj.PAS_ID = e.PAS_ID;
        obj.MODALIDAD = TraductorDicom(e.SERIES[0].MODALIDAD)
        array.push({...obj})
    })
    console.log(array)
    return array.reverse();
  }
};
export default ExportExcel