import React, { useEffect, useState } from 'react';
// condense, expand arrows for side-menu
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
// need to import a menu component or build one

export default function SideMenu() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
    return (
        <>
        </>
    )
}

/*

SG!

Going to test out implementation of side menu that acts as a pseduo-navbar/allows for quick navigation if needed
    -> go to reports, exams, patients, admin etc
 */
