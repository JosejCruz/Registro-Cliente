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
const BuscarEstudios = async (Cliente, Fechas) => {
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
    console.log(fi, ff)
    console.log(datos.data);
    console.log(datos.data.reverse())
    let est = datos.data;
    let obj = {};
    est.forEach((e) => {
      let mod = e.SERIES[0].MODALIDAD;
      if (obj[mod]) {
        obj[mod]++;
      } else {
        obj[mod] = 1;
      }
    });
    console.log(obj);
    return obj;
  }
};
export default BuscarEstudios