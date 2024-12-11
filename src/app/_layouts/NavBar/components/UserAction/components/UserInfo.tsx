"use client";
import React from 'react'


const UserOptions = [
    {
        title: 'Logout',
        onClick: () => {
            console.log('logout')
        }
    },
    {
        title: 'Logout',
        onClick: () => {
            console.log('logout')
        }
    }
]

export default function UserInfo() {
    const [isHover, setIsHover] = React.useState(false);
    const [local, setLocal] = React.useState({
        x: 0,
        y: 0
    });
    React.useEffect(() => {
        function handlerPointer(e: PointerEvent) {
            if ((e.target as HTMLElement)!.getAttribute('data-user-info')) {
                const dom = document.getElementById('user-info');
                console.log("dom!.offsetWidth:",dom!.offsetWidth);
                let oX =(dom!.offsetWidth - 160) /2
                if(dom!.offsetWidth <= 160){
                    oX = dom!.offsetWidth / 50
                }
                setLocal({
                    x: dom!.offsetLeft + oX,
                    y: dom!.offsetHeight + 8
                })
                setIsHover(true);
            } else {
                setIsHover(false)
            }
        }
        window.addEventListener('pointerdown', handlerPointer)
        return () => {
            window.removeEventListener('pointerdown', handlerPointer)
        }
    }, [])
    return (
        <>
            <div id="user-info" className='sm:hover:bg-white/70 ease-in-out duration-200 p-1 px-2 rounded-full flex items-center gap-2 text-lg sm:min-w-40 min-w-[55px] w-[fit-content]'
                data-user-info="1"
            >
                <img src='https://via.placeholder.com/50x50'
                    data-user-info="1"
                    alt='user-avatar' className='rounded-full h-10 w-10 object-cover ' />
                <span
                    data-user-info="1"
                    className="cursor-pointer sm:block hidden hover:text-black/70 text-nowrap">UserInfo</span>
            </div>
            <div className={
                [
                    'absolute z-10 bg-white shadow-lg rounded-md sm:w-40 p-2 top-12 ease-out-in duration-800 display-none',
                    isHover ? 'opacity-100' : 'opacity-0 display-none'
                ].join(' ')
            }
                style={{
                    top: local.y || '-999px',
                    left: local.x,
                }}
                data-user-info="1"
            >
                {
                    UserOptions.map((item, index) => (
                        <div key={index}
                            data-user-info="1"
                            className='cursor-pointer flex justify-center hover:bg-gray-200 p-1 px-2 rounded'
                            onClick={item.onClick}
                        >
                            {item.title}
                        </div>
                    ))
                }
            </div>
        </>
    )
}
