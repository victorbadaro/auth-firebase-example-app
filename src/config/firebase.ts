import { env } from '@/env';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: env.VITE_FIREBASE_API_KEY,
	authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: env.VITE_FIREBASE_APP_ID,
	measurementId: env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
