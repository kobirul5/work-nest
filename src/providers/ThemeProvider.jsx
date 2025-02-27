import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext()


const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");



    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme); // Save preference
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };


    const themeInfo= {
        theme,
        toggleTheme,
    }

  return (
    <ThemeContext.Provider value={themeInfo} >{children}</ThemeContext.Provider>
  )
}

export default ThemeProvider