
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole } from '../types/school-types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
  error: string | null;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => {},
  logout: () => {},
  error: null,
});

// Mock user data for prototype
const mockUsers: Record<string, User> = {
  'admin@school.com': {
    id: '1',
    email: 'admin@school.com',
    firstName: 'Admin',
    lastName: 'User',
    role: 'admin',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  'teacher@school.com': {
    id: '2',
    email: 'teacher@school.com',
    firstName: 'Teacher',
    lastName: 'User',
    role: 'teacher',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  'parent@example.com': {
    id: '3',
    email: 'parent@example.com',
    firstName: 'Parent',
    lastName: 'User',
    role: 'parent',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  'superadmin@school.com': {
    id: '4',
    email: 'superadmin@school.com',
    firstName: 'Super',
    lastName: 'Admin',
    role: 'super_admin',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check for stored user in localStorage for persistence
    const storedUser = localStorage.getItem('schoolAppUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string, role: UserRole) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Mock authentication - In a real app, this would call Supabase auth
      if (mockUsers[email] && mockUsers[email].role === role) {
        const loggedInUser = mockUsers[email];
        localStorage.setItem('schoolAppUser', JSON.stringify(loggedInUser));
        setUser(loggedInUser);
      } else {
        throw new Error('Invalid credentials or user role');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('schoolAppUser');
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
