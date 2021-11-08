import './App.css';

import firebase from "firebase/compat";
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.react_app_project_id,
    storageBucket: process.env.react_app_storage_bucket,
    messagingSenderId: process.env.react_app_messagin_id,
    appId: process.env.REACT_APP_APP_ID
})

const auth = firebase.auth()
const db = firebase.firestore()

function App() {

  const [user] = useAuthState(auth)

  return (
    <div className="App">
      <header>

      </header>

      <section>
        {user}
      </section>

    </div>
  );
}

export default App;
