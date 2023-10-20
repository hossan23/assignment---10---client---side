/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

import app from '../Firebase/firebase.config';
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
 const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  const unSubscribe = onAuthStateChanged(auth, currentUser => {
   console.log(currentUser);
   setUser(currentUser);
   setLoading(false);
  });
  return () => {
   unSubscribe();
  };
 }, []);

 const register = (email, password) => {
  setLoading(true);
  return createUserWithEmailAndPassword(auth, email, password);
 };

 const login = (email, password) => {
  setLoading(true);
  return signInWithEmailAndPassword(auth, email, password);
 };

 const logout = () => {
  setLoading(true);
  signOut(auth);
 };

 const googleLogin = () => {
  setLoading(true);
  return signInWithPopup(auth, googleProvider);
 };

 const userInfo = {
  user,
  loading,
  register,
  login,
  logout,
  googleLogin,
 };

 return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
