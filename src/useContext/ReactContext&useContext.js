import Content from "./Content";
import { useState, createContext, useContext } from "react";
import "../App.css";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
// ⁡⁢⁣⁣Context
// CompA => CompB => CompC
// Chi can chuyen tu CompA sang bat cu Comp nao ma k can qua trung gian⁡

// ⁡⁣⁣⁢1. Create context
// 2. Provider
// 3. Consumer⁡

// ! Theme : Dark / Light, chua toi uu
/*
export const ThemeContext = createContext();

function App() {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <ThemeContext.Provider value={theme}>
            <div style={{ padding: 30 }}>
                <button onClick={toggleTheme}>Toggle Theme </button>
                <Content />
            </div>
        </ThemeContext.Provider>
    );
}
 */
// ! Theme : Dark / Light, da toi uu
function App() {
    const context = useContext(ThemeContext);
    console.log(context);
    return (
        <div style={{ padding: 30 }}>
            <button onClick={context.toggleTheme}>Toggle Theme </button>
            <Content />
        </div>
    );
}
export default App;
