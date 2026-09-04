// src/context/AuthContext.ts

import { createContext } from "react"

interface AuthContextType {
  isAuthenticated: boolean
  login: () => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
)

export type { AuthContextType }