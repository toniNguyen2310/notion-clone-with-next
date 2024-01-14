
import React, { useEffect, useState } from 'react';

export const useScrollTop = (threshold = 10) => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(()=>{
        const handleScroll = () => {
            if(window.scrollY > threshold){
                setScrolled(true)
            }
        }

        window.addEventListener('scroll', handleScroll )
        return () => window.removeEventListener('scroll', handleScroll)
    /* trunk-ignore(eslint/react-hooks/exhaustive-deps) */
    }, [threshold])

    return scrolled
}

