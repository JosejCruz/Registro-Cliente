import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc } from 'firebase/firestore';
import { collection, addDoc, onSnapshot, doc, deleteDoc } from "firebase/firestore";


function validar(cliente){
    let flag = false
    let urlReg = /\w+\:\/{2}\w+.\w+.\w+/g
    if(cliente.Nombre !== "" && cliente.Ciudad !== "" && urlReg.test(cliente.url)){
        flag = true
    }
    return flag
}


export default class FireBase {
  static firebaseConfig = {
    apiKey: "AIzaSyCZTxxYCaU-VH7qwlsSlOvVRpOUSIFrr_M",
    authDomain: "controlsymphony-5cfb7.firebaseapp.com",
    projectId: "controlsymphony-5cfb7",
    storageBucket: "controlsymphony-5cfb7.appspot.com",
    messagingSenderId: "398675695405",
    appId: "1:398675695405:web:a38406ce132f02f81ae5a4",
    measurementId: `G-Y2L9WYQLBM`,
  };
  static app = "ssssss";
  static db = undefined;
  static Iniciar() {
    this.app = initializeApp(this.firebaseConfig);
    this.db = getFirestore(this.app);
  }
  static async SetCliente(cliente) {
    if (validar(cliente)) {
      try {
        const docRef = await addDoc(collection(this.db, "Clientes"), {
          Nombre: cliente.Nombre,
          Ciudad: cliente.Ciudad,
          url: cliente.url,
          LimiteInicial: cliente.LimiteInicial,
          MontoInicial: cliente.MontoInicial,
          Exedente: cliente.Exedente,
          Activo: true,
        });
        console.log("Document written with ID: ", docRef.id);
        return true;
      } catch (e) {
        console.error("Error adding document: ", e);
        return false;
      }
    }
    alert("Datos incorrectos");
    return false;
  }
  static async clientesSnapshot(cb) {
    onSnapshot(collection(this.db, "Clientes"), (docs) => {
      let collecciones = [];
      docs.forEach((doc) => {
        let cliente = doc.data();
        cliente.id = doc.id;
        collecciones.push(cliente);
      });
      cb(collecciones);
    });
  }
  static async actualizaregistro(cliente) {
    let docRef = doc(this.db, "Clientes", cliente.id);
    delete cliente.id;
    try {
      const res = await setDoc(docRef, cliente);
      return true;
    } catch (error) {
      return false;
    }
  }

  static async EliminarRegistro(cliente) {
    let docRef = doc(this.db, "Clientes", cliente.id);
    delete cliente.id;
    try {
      const res = await deleteDoc(docRef, cliente);
      return true;
    } catch (error) {
      return false;
    }
  }
}