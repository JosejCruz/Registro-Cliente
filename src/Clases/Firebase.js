import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc } from 'firebase/firestore';
import { collection, addDoc, onSnapshot, doc } from "firebase/firestore";


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
    apiKey: "AIzaSyDjA1siGG_viebpFzWY9pmSOpz3KKwrVHE",
    authDomain: "test-registro-clientes.firebaseapp.com",
    projectId: "test-registro-clientes",
    storageBucket: "test-registro-clientes.appspot.com",
    messagingSenderId: "947240990080",
    appId: "1:947240990080:web:e8015fe9ff7a28bfc83d65",
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
      const res = await setDoc(docRef, cliente)
      return true
    } catch (error) {
      return false
    }
  }
}