import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AuthContextType, User } from '../types';
import { ADMIN_USERNAME, ADMIN_PASSWORD } from '../constants';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      // Persist login state strictly for demo UX refresh tolerance
      const saved = localStorage.getItem('abg_auth_user');
      return saved ? JSON.parse(saved) : null;
    } catch (error) {
      console.error('Error loading auth from localStorage:', error);
      return null;
    }
  });

  const login = (username: string, password: string) => {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      const newUser = { username, isAuthenticated: true };
      setUser(newUser);
      try {
        localStorage.setItem('abg_auth_user', JSON.stringify(newUser));
      } catch (error) {
        console.error('Error saving auth to localStorage:', error);
      }
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem('abg_auth_user');
    } catch (error) {
      console.error('Error removing auth from localStorage:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};