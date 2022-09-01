import React, { createContext } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
    apiKey: "AIzaSyD0rg6kxaSzhYBPrFKZyoXre3oWyna2aw0",
    authDomain: "chat-react-b1420.firebaseapp.com",
    projectId: "chat-react-b1420",
    storageBucket: "chat-react-b1420.appspot.com",
    messagingSenderId: "646176365546",
    appId: "1:646176365546:web:ed394bb1b7e64ea03c3093",
    measurementId: "G-B81QJW05HL"
}
);

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

const root = createRoot(document.getElementById('root'));

root.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,
);
