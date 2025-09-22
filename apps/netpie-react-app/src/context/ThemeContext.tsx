'use client';

import { createContext, useState, useContext, ReactNode } from "react";

// 1. Define the shape of the theme and the context value for strong typing
type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

// 2. Create the context with a type. The initial value is undefined
// because we will only use it inside the provider.
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3. Create the provider component
export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// 4. Create a custom hook for easy and safe context consumption
export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within a ToastProvider');
    return context;
}
