import { useEffect, useState } from 'react';
import { auth } from '../../../firebase/firebaseConfig';

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [currUser, setCurrUser] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initialiseUser);
    return unsubscribe;
  }, []);
}
