'use client'

import React from "react";

type AppThemeState = {
    mode: string
}

export const initialThemeState: AppThemeState = {

    mode: "light"
} 

export const AppThemeContext = React.createContext(initialThemeState);

export function AppThemeContextProvider(props: {children: Readonly<React.ReactNode>}){

    return (
        <AppThemeContext.Provider value={initialThemeState}>
            {props.children}
        </AppThemeContext.Provider>
    )
}


