import firebase from 'firebase';
import { firebaseConfig } from '../config';

export const firebaseImpl = firebase.initializeApp(firebaseConfig);
export const firebaseDatabase = firebase.database();