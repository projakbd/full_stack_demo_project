import { useState, useEffect, type ReactNode } from 'react';
import api from '../services/api';
import { AuthContext } from './AuthContext';
import type { 
  User, 
  LoginResponse, 
  ApiResponse, 
  RegisterResponse, 
  RegisterData, 
  AuthResult 
} from '../types';
import type { ApiError } from '../types/errors';

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      fetchUser();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUser = async (): Promise<void> => {
    try {
      const response = await api.get<ApiResponse<{ user: User }>>('/api/user');
      setUser(response.data.data.user);
      setIsAuthenticated(true);
    } catch {
      logout();
    } finally {
      setLoading(false);
    }
  };

  const login = async (
    email: string, 
    password: string
  ): Promise<AuthResult> => {
    try {
      const response = await api.post<LoginResponse>('/api/login', { email, password });
      const { user: userData, token } = response.data.data;
      
      localStorage.setItem('authToken', token.token);
      api.defaults.headers.Authorization = `Bearer ${token.token}`;
      
      setUser(userData);
      setIsAuthenticated(true);
      
      return { success: true };
    } catch (error: unknown) {
      const apiError = error as ApiError;
      return { 
        success: false, 
        message: apiError.response?.data?.message || 'Login failed' 
      };
    }
  };

  const register = async (
    data: RegisterData
  ): Promise<AuthResult> => {
    try {
      const response = await api.post<RegisterResponse>('/api/register', data);
      const { user: userData, token } = response.data.data;
      
      localStorage.setItem('authToken', token.token);
      api.defaults.headers.Authorization = `Bearer ${token.token}`;
      
      setUser(userData);
      setIsAuthenticated(true);
      
      return { success: true, message: response.data.message };
    } catch (error: unknown) {
      const apiError = error as ApiError;
      return { 
        success: false, 
        message: apiError.response?.data?.message || 'Registration failed' 
      };
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await api.post('/api/logout');
    } catch {
      console.log('Logout Error');
    } finally {
      localStorage.removeItem('authToken');
      delete api.defaults.headers.Authorization;
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  const value = {
    user,
    isAuthenticated,
    login,
    register,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}