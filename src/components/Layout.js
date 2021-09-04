import React from 'react'

export const Layout = ({children}) => {
    const classContainer =
    'w-11/12 text-center gap-1 grid grid-cols-4 items-center max-w-screen-sm';
    return (
        <div className={classContainer}>
            {children}
        </div>
    )
}
