// src/context/AuthContext.jsx
import React, { createContext, useContext, useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

    useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('authUser'));
    if (savedUser) setUser(savedUser);
  }, []);

  const login = async (email, password) => {
  try {
    const response = await fetch('http://localhost:5000/api/Auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) throw new Error('Invalid credentials');

    const data = await response.json();
    setUser(data); 
    localStorage.setItem('authUser', JSON.stringify(data));             // Set username and role
    
    
    navigate('/dashboard');     // Go to dashboard
  } catch (err) {
    alert(err.message);
  }
};


  const logout = () => {
    setUser(null);
    localStorage.removeItem('authUser');
    navigate('/login');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
        role: user?.role || null,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);