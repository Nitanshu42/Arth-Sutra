import app from "../firebase/firebaseConfig";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
}
  from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const registerUser = (
  email,
  password
) => {

  return createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

};

export const loginUser = (
  email,
  password
) => {

  return signInWithEmailAndPassword(
    auth,
    email,
    password
  );

};

export const logoutUser = () => {

  return signOut(auth);

};

export const loginWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};

export default auth;