"use client";
import React from 'react'
import { AiFillSun, AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";
import screenfull from 'screenfull';

const ToolsItems = [
    {
        icon: <AiFillSun />,
        title: "theme",
        onClick: () => console.log("theme"),
    },
    {
        icon: (isFullscreen: boolean) => isFullscreen ? <AiOutlineFullscreenExit /> : <AiOutlineFullscreen />,
        title: "fullscreen",
        onClick: () => console.log("theme"),
    }
];

export default function Tools() {
    const [isFullscreen, setIsFullscreen] = React.useState(false);

    return (
        <ul className=' sm:flex hidden items-center space-x-2'>
            {
                ToolsItems.map((item, id) => (
                    <li className="bg-white/50 p-2 rounded-full hover:bg-white" key={id}
                    onClick={()=>{
                        item.onClick();
                        if (item.title === "fullscreen") {
                            if (screenfull.isEnabled) {
                                screenfull.toggle();
                                setIsFullscreen(!isFullscreen);
                            }
                        }
                    }}
                    >{
                        typeof item.icon === "function" ? item.icon(isFullscreen) : item.icon
                    }</li>
                ))
            }
        </ul>
    )
}
