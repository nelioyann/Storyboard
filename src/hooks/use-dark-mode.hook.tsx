import React, { createContext, useContext, useEffect, useState } from "react"

export interface DarkModeContextProps {
  darkTheme: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  toggleDarkTheme: (checked: boolean) => void;
}

export const DarkModeContext = createContext({} as DarkModeContextProps)

function useDarkMode() {
  return useContext(DarkModeContext)
}


const DarkModeContextProvider: React.FC = (props) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(() => localStorage.getItem("darkTheme") === "true" ? true : false);


  function toggleDarkTheme(shouldAdd: boolean) {
    document.body.classList.toggle("dark", shouldAdd);
    localStorage.setItem("darkTheme", JSON.stringify(darkTheme)); // Set the theme in local storage
  }


  const defaultThemeMode: DarkModeContextProps = {
    darkTheme: darkTheme, setDarkTheme: setDarkTheme, toggleDarkTheme: toggleDarkTheme
  }

  useEffect(() => {
    toggleDarkTheme(darkTheme); // Listen for the toggle check/uncheck to toggle the dark class on the <body>
    // TODO: Set actual theme colors instead of HEX 
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", darkTheme ? "#000000" : "#ffffff");

  }, [darkTheme])

  // useEffect(() => {
  //   // Use matchMedia to check the user preference
  //   const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  //   toggleDarkTheme(prefersDark.matches);
  // })

  return (
    <DarkModeContext.Provider value={defaultThemeMode}>
      {props.children}
    </DarkModeContext.Provider>
  )
}

export { useDarkMode, DarkModeContextProvider };