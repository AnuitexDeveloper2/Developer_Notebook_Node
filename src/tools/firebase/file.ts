import { FirebaseApp, initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes } from "firebase/storage"

export class FirebaseStorage {
    private firebaseConfig = {
        apiKey: "AIzaSyBevEl2-TaGmFOf0c__X-PACCCqm7XhYvs",
        authDomain: "notebook-3f0bd.firebaseapp.com",
        projectId: "notebook-3f0bd",
        storageBucket: "notebook-3f0bd.appspot.com",
        messagingSenderId: "330793725031",
        appId: "1:330793725031:web:b860dbfc6ba5d9ef5db8c2",
        measurementId: "G-B74RVBP4RQ"
    };
    private app: FirebaseApp;
    private name: string;
    private file: Buffer;
    constructor(file: Buffer, name: string) {
        this.app = initializeApp(this.firebaseConfig);
        this.name = name
        this.file = file
    }

    async uploadImage() {
        const storage = getStorage()
        const storageRef = ref(storage, this.name)
        try {

            const result = await uploadBytes(storageRef, this.file)
            return result.metadata.fullPath
        } catch (err) {
            console.log(err);

        }
    }
}