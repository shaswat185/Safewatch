// src/context/AuthProvider.tsx

import { useState, type ReactNode } from "react"
import { AuthContext } from "./AuthContext"

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  )
  const login = () => {
    setIsAuthenticated(true)
    localStorage.setItem("isAuthenticated", "true")
  }

  const logout = () => {
  setIsAuthenticated(false)
  localStorage.removeItem("isAuthenticated")
}
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}