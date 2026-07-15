import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(() => {
        const stored = localStorage.getItem('ak-theme');
        return stored ? stored === 'dark' : true; // default dark
    });
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        localStorage.setItem('ak-theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    useEffect(() => {
        if (isTransitioning) {
            document.body.classList.add('theme-transitioning');
        } else {
            document.body.classList.remove('theme-transitioning');
        }
    }, [isTransitioning]);

    const toggleTheme = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        // Wait for full blur animation (250ms)
        setTimeout(() => {
            setIsDark(prev => !prev);
            // Wait for DOM update, then fade back in
            setTimeout(() => {
                setIsTransitioning(false);
            }, 50);
        }, 250);
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme, isTransitioning }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
