import {createContext, useEffect, useState} from 'react'
const themes = {
    dark:{
        backgroundColor: 'black',
        color: 'white'
    },
    light:{
        backgroundColor: 'white',
        color: 'black'
    }
}
const initialState = {
    light: false,
    theme: themes.dark,
    toggle: () => {}
}
const ThemeContext = createContext(initialState)

function ThemeProvider({children}) {
    const [light, setLight] = useState(false);

    useEffect(() => {
        const isLight = localStorage.getItem('light') === 'true';
        setLight(isLight);
    }, [light])

    const toggle = () => {
        const isLight = !light;
        localStorage.setItem('light', JSON.stringify(isLight))
        setLight(isLight);
    }

    const theme = light ? themes.light : themes.dark;
    return ( 
        <ThemeContext.Provider value={{theme, light, toggle}}>
            {children}
        </ThemeContext.Provider>
     );
}

export {ThemeProvider, ThemeContext};
