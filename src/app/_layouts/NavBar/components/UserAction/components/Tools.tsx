"use client";
import Image from 'next/image';
import React from 'react'
import { AiFillSun, AiOutlineFullscreen, AiOutlineFullscreenExit, AiFillMoon } from "react-icons/ai";
import screenfull from 'screenfull';
import useThemeStore from '@/stores/theme'
import { Theme } from '@/stores/theme'

function toggleTheme(theme: "dark" | "light") {
    document.body.classList.toggle(
        'dark', theme === 'dark' ? true : false
    )
    document.body.classList.toggle(
        'light', theme === 'light' ? true : false
    )
}

export default function Tools() {
    const [isFullscreen, setIsFullscreen] = React.useState(false);

    const theme = useThemeStore((state => state.theme));
    const setTheme = useThemeStore((state => state.updateTheme));

    React.useEffect(() => {
        const themeMedia = window.matchMedia("(prefers-color-scheme: light)");
        if (themeMedia.matches) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
        toggleTheme(localStorage.getItem('theme') as Theme || 'dark');
        setTheme(localStorage.getItem('theme') as Theme || 'dark');
        // listen to the theme change
        themeMedia.addEventListener("change", e => {
            if (e.matches) {
                localStorage.setItem('theme', 'light');
            } else {
                localStorage.setItem('theme', 'dark');
            }
            toggleTheme(localStorage.getItem('theme') as Theme || 'dark');
        });
    }, []);
    const ToolsItems = [
        {
            icon: theme === 'dark' ? <AiFillMoon /> :  <AiFillSun />,
            title: "theme",
            type: theme,
            onClick: () => {
                const localTheme = localStorage.getItem('theme');
                document.body.classList.toggle(
                    'dark', localTheme === 'dark' ? true : false
                )
                document.body.classList.toggle(
                    'light', localTheme === 'light' ? true : false
                )
                setTheme(localTheme as Theme)
                localStorage.setItem('theme', localTheme === 'dark' ? 'light' : 'dark')
            },
        },
        {
            icon: (isFullscreen: boolean) => isFullscreen ? <AiOutlineFullscreenExit /> : <AiOutlineFullscreen />,
            title: "fullscreen",
            onClick: () => {
                if (screenfull.isEnabled) {
                    screenfull.toggle();
                    setIsFullscreen(!isFullscreen);
                }
            }
        }
    ];
    return (
        <ul className=' sm:flex hidden items-center space-x-2'>
            {
                ToolsItems.map((item, id) => (
                    <li className={[
                        "bg-white/50 p-2 rounded-full hover:bg-white/70 text-black"
                    ].join(' ')} key={id}
                        onClick={() => {
                            item.onClick();
                        }}
                    >{
                            typeof item.icon === "function" ? item.icon(isFullscreen) : item.icon
                        }</li>
                ))
            }
            <li>
                <a href="https://github.com/yungu-2201999">
                    <Image
                        src="https://avatars.githubusercontent.com/u/168718552?v=4"
                        priority
                        width={35}
                        height={35}
                        className='rounded-full select-none'
                        alt="Picture of the author"
                    />
                </a>
            </li>
        </ul>
    )
}
