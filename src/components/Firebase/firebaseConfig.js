import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAi77hNIeMWQ85hBWoR1zAh3BFL7OuvIkQ",
  authDomain: "marvel-quiz-c6a34.firebaseapp.com",
  projectId: "marvel-quiz-c6a34",
  storageBucket: "marvel-quiz-c6a34.appspot.com",
  messagingSenderId: "983225613737",
  appId: "1:983225613737:web:4dcb3167f377038a0f18b8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
