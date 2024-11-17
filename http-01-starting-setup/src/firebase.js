import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
  apiKey: 'AIzaSyBx7qOC4D84RvICJ6-HZb6fiFGngs6xeRc',
  authDomain: 'vue-http-demo-b2da9.firebaseapp.com',
  databaseURL:
    'https://vue-http-demo-b2da9-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'vue-http-demo-b2da9',
  storageBucket: 'vue-http-demo-b2da9.firebasestorage.app',
  messagingSenderId: '1041968247519',
  appId: '1:1041968247519:web:382a716bc0b9275470af6a',
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
export {database}