export interface User {
  id: number;
  email: string;
  fullName: string | null;
  createdAt: string;
}

export interface AuthToken {
  type: string;
  token: string;
  expiresIn: number;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    token: AuthToken;
  };
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    token: AuthToken;
  };
}

export interface RegisterData {
  email: string;
  password: string;
  fullName: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}

export interface AuthResult {
  success: boolean;
  message?: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<AuthResult>;
  register: (data: RegisterData) => Promise<AuthResult>;
  logout: () => Promise<void>;
  loading: boolean;
}