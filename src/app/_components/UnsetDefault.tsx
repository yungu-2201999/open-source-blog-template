"use client";
import React from 'react'
// If you want to disable debugger,uncomment the following line
// import '@/utils/disableDebugger'


export default function UnsetDefault() {
    React.useEffect(() => {
        const UnsetTag = (e:KeyboardEvent)=>{
            if(e.key === 'Tab')event?.preventDefault()
        }
        window.addEventListener('keydown',UnsetTag);
        return ()=>{
            window.removeEventListener('keydown',UnsetTag); 
        }
    }, [])
    return (
        <></>
    )
}
