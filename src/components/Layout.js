import React from 'react'

export const Layout = ({children}) => {
    const classContainer =
    'w-11/12 text-center gap-3 md:gap-5 flex flex-col max-w-screen-sm';
    return (
        <div className={classContainer}>
            {children}
        </div>
    )
}
