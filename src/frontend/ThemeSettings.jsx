import "../assets/scss/settings.scss"
import { useState, useEffect } from 'react'

const ThemeSettings = () => {
    const [colors, setColors] = useState({
        'system-white': '#ffffff',
        'system-black': '#000000',
        'system-background': '#1c1c1e',
        'system-text': '#e4e4e4',
        'system-text2': '#808080',
        'system-highlight': '#4caf50',
        'system-border': '#2b2b2d',
        'system-card': 'rgba(37,37,38,1)',
        'system-hover': '#66bb6a',
        'system-error': '#D64545',
        'system-success': '#52B788',
        'system-shadow': 'rgba(0, 0, 0, 0.5)',
        'system-shadow2': 'rgba(255, 255, 255, 0.1)',
        'system-disabled': '#6d6d6d'
    })

    // Initialize colors from localStorage or CSS variables
    useEffect(() => {
        const savedColors = localStorage.getItem('themeColors')
        if (savedColors) {
            const parsedColors = JSON.parse(savedColors)
            setColors(parsedColors)
            updateCSSVariables(parsedColors)
        } else {
            // Get initial colors from CSS variables
            const root = document.documentElement
            const initialColors = Object.fromEntries(
                Object.entries(colors).map(([key, value]) => [key, root.style.getPropertyValue(`--${key}`) || value])
            )
            setColors(initialColors)
            updateCSSVariables(initialColors)
        }
    }, [])

    const updateCSSVariables = (newColors) => {
        const root = document.documentElement
        Object.entries(newColors).forEach(([key, value]) => {
            root.style.setProperty(`--${key}`, value)
        })
    }

    const handleColorChange = (e) => {
        const { name, value } = e.target
        const newColors = { ...colors, [name]: value }
        setColors(newColors)
        updateCSSVariables(newColors)
    }

    const saveColors = () => {
        localStorage.setItem('themeColors', JSON.stringify(colors))
    }

    const resetColors = () => {
        localStorage.clear()
        window.location.reload()
    }

    const closeSetting = () => {
        document.querySelector('.settings_container').style.transform = 'translateY(100%)'
    }

    const showSetting = () => {
        document.querySelector('.settings_container').style.transform = 'translateY(0)'
    }

    return (
        <>
            <button className="showColorSetting" onClick={showSetting}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44 25.4l12.5 57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>
            </button>
            
            <div className="settings_container">
            <div className="container"> 
                <h2 className="settings_title">Customize Theme Colors</h2>  
                <div className="row row-gap-3 justify-content-center">
                    {Object.entries(colors).map(([colorName, colorValue]) => (
                        <div key={colorName} className="col-md-3">
                            <div className="settings_item">
                                <label htmlFor={colorName}>{colorName.replace('system-', '')} | <span>{colorValue}</span></label>
                                <input 
                                    type="color" 
                                    name={colorName} 
                                    id={colorName} 
                                    value={colorValue}
                                    onChange={handleColorChange}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="settings_actions d-flex align-items-center gap-3 justify-content-center mt-4">
                    <button onClick={saveColors} className="save">Save Theme</button>
                    <button onClick={resetColors} className="reset">Reset</button>
                    <button onClick={closeSetting} className="reset">Close Setting</button>
                </div>
            </div>
        </div>
        </>
        
    )
}

export default ThemeSettings