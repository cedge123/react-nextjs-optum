'use client'

import React, { useState } from "react";

export type ThemeState = {
    mode: string;
    changeTheme?: (mode: string) => void
}

export const initialThemeState: ThemeState = {
    mode: 'dark'
}

// creates the context/store
export const AppThemeContext = React.createContext(initialThemeState);

type AppThemeContextProviderProps = {
    children: React.ReactNode
}
export function AppThemeContextProvider(props: AppThemeContextProviderProps){

    const [mode, setMode] = useState(initialThemeState.mode);

    return (
        <AppThemeContext.Provider value={{mode, changeTheme: setMode}}>
            {props.children}
        </AppThemeContext.Provider>
    )
}
