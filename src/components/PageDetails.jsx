import React from 'react'
import { useState } from 'react'

export const PageDetails = () => {
    const [toggle, setToggle] = useState(true);
    const [active, setActive] = useState(false);
    
    const setTgl = () => {
        setToggle(!toggle);
    }

    const setAct = () => {
        setActive(!active);
    }
}