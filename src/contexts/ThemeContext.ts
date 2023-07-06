import { createContext } from 'react'

export const ThemeContext = createContext<'darck' | 'light'>('light');