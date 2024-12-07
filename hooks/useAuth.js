// /hooks/useAuth.js
import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    // Check user authentication status
    const user = localStorage.getItem('user');
    setAuth(!!user);
  }, []);

  return auth;
};
