import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { User } from '@/types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const { toast } = useToast();

  // Check for user in localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('dietxpert_user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Failed to parse stored user', error);
        localStorage.removeItem('dietxpert_user');
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // For demo purposes, we'll use mock login
    // In a real app, you would validate with a backend
    if (email && password) {
      const mockUser: User = {
        id: '1',
        email,
        name: email.split('@')[0],
        favorites: [],
      };
      
      setUser(mockUser);
      setIsAuthenticated(true);
      localStorage.setItem('dietxpert_user', JSON.stringify(mockUser));
      
      toast({
        title: "Login Successful",
        description: `Welcome back, ${mockUser.name}!`,
        duration: 5000,
      });
      
      return true;
    }
    
    toast({
      title: "Login Failed",
      description: "Invalid email or password",
      variant: "destructive",
      duration: 5000,
    });
    
    return false;
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // For demo purposes
    if (name && email && password) {
      const mockUser: User = {
        id: Date.now().toString(),
        email,
        name,
        favorites: [],
      };
      
      setUser(mockUser);
      setIsAuthenticated(true);
      localStorage.setItem('dietxpert_user', JSON.stringify(mockUser));
      
      toast({
        title: "Registration Successful",
        description: `Welcome to DietXpert, ${name}!`,
        duration: 5000,
      });
      
      return true;
    }
    
    toast({
      title: "Registration Failed",
      description: "Please fill all required fields",
      variant: "destructive",
      duration: 5000,
    });
    
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('dietxpert_user');
    
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out",
      duration: 3000,
    });
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};