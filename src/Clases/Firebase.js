import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc } from "firebase/firestore";

export default class FireBase {
    static firebaseConfig = {
        apiKey: "AIzaSyCZTxxYCaU-VH7qwlsSlOvVRpOUSIFrr_M",
        authDomain: "controlsymphony-5cfb7.firebaseapp.com",
        projectId: "controlsymphony-5cfb7",
        storageBucket: "controlsymphony-5cfb7.appspot.com",
        messagingSenderId: "398675695405",
        appId: "1:398675695405:web:a38406ce132f02f81ae5a4",
        measurementId: `G-Y2L9WYQLBM`
    }
    static app = "ssssss"
    static db = undefined
    static Iniciar() {
        this.app = initializeApp(this.firebaseConfig);
        this.db = getFirestore(this.app);
    }
    static async SetCliente(cliente) {
        console.log(this.db)
        try {
            const docRef = await addDoc(collection(this.db, "Clientes"), {
                Nombre: cliente.Nombre,
                Ciudad: cliente.Ciudad,
                url: cliente.url,
                LimiteInicial:cliente.LimiteInicial,
                MontoInicial:cliente.MontoInicial,
                Exedente:cliente.Exedente,
                Activo:true
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
}