import React, { JSX } from 'react'

export default function h1(props: React.PropsWithChildren<{ className?: string }>): JSX.Element {
    return (
        <h1 className={
            [props.className,
                "text-4xl text-center font-bold"].join(' ')
        }>
            {props.children}
        </h1>
    )
}
