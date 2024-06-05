import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "@firebase/storage";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7qZnVjy8vmwlPUUxtQvHdCfv3YBHwcTo",
  authDomain: "fir-and-react-b5018.firebaseapp.com",
  projectId: "fir-and-react-b5018",
  storageBucket: "fir-and-react-b5018.appspot.com",
  messagingSenderId: "581833998124",
  appId: "1:581833998124:web:df262a7668ae0899e5b689",
  measurementId: "G-57VDKCK283"
};

export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);