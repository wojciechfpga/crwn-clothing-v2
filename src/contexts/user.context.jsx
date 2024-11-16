import { createContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase.util'; // Importuj konfigurację Firebase

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Rozpocznij nasłuch zmian stanu logowania
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user); // Zaktualizuj stan użytkownika w kontekście
    });

    // Funkcja czyszcząca, która usuwa nasłuchiwacza
    return unsubscribe;
  }, []);

  const value = { currentUser };
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
