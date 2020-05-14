import React, { useState, useContext, createContext } from "react";
import { useHistory } from "react-router-dom";
const authContext = createContext();
export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
  }
  
  // Hook for child components to get the auth object ...
  // ... and re-render when it changes.
  export const useAuth = () => {
    return useContext(authContext);
  };

  function useProvideAuth() {
    const [user, setUser] = useState(null);
    const [authorised, setAuthorised] = useState(false);
    const history = useHistory();

    const signin = (email, password) => {
        /* return firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(response => {
            setUser(response.user);
            return response.user;
          }); */
          setUser(email);
          setAuthorised(true);
          history.push('/');

      };
      const signout = (email, password) => {
        /* return firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(response => {
            setUser(response.user);
            return response.user;
          }); */
          setAuthorised(false);
          setUser();
      };
    
    return {
        user,
        signin,
        authorised,
        //signup,
        signout
        //sendPasswordResetEmail,
        //confirmPasswordReset
    };
  };
    