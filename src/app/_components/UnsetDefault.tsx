"use client";
import useThemeStore,{ Theme} from '@/stores/theme';
import React from 'react'
// If you want to disable debugger,uncomment the following line
// import '@/utils/disableDebugger'



function toggleTheme(theme:"dark" | "light") {
    const localTheme =  theme;

    document.body.classList.toggle(
        'dark', localTheme === 'dark' ? true : false
    )
    document.body.classList.toggle(
        'light', localTheme === 'light' ? true : false
    )
    localStorage.setItem('theme', localTheme === 'dark' ? 'light' : 'dark');
}

export default function UnsetDefault() {
    React.useEffect(() => {
      
        const UnsetTag = (e: KeyboardEvent) => {
            if (e.key === 'Tab') event?.preventDefault()
        }
        window.addEventListener('keydown', UnsetTag);
        return () => {
            window.removeEventListener('keydown', UnsetTag);
        }
    }, [])
    return (
        <></>
    )
}
