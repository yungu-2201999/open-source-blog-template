"use client";
import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
    const [isFocused, setIsFocused] = React.useState(false)
    const focusedClass = isFocused ? 'bg-blue-100/40 border-stone-200/80 md:w-[355px]' : 'bg-white/50 border-stone-200/20'
    return (
        <>
            <div
                className={['flex outline-none items-center border-2 h-[70%] bg-white/50 rounded-md border-stone-200/60',
                    focusedClass
                ].join(' ')}
            >
                <div className='flex-1'>
                    <input type="text" placeholder="Search Article" onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}
                        className={[
                            'flex-1 outline-0 rounded-sm h-full bg-t bg-transparent pl-2 placeholder:text-gray-400 overflow-hidden w-full text-black',
                            isFocused && 'w-[300px]'
                        ].join(' ')} />
                </div>
                <button
                    className={['m-2 mr-1 ease-in-out duration-300\
                     text-slate-400 hover:text-slate-500\
                      dark:hover:bg-white\
                      hover:bg-black/10\
                       p-2 px-3 rounded-md',
                        isFocused && 'text-slate-700'
                    ].join(' ')}
                ><AiOutlineSearch /></button>
            </div>
        </>
    )
}

export default Search
