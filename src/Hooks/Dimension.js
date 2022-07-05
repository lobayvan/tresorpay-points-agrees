import React, {useEffect, useState} from 'react'

export default function Dimension() {
    const [dimension, setDimension] = useState([]);

    useEffect(() => {
        window.onresize = () => {
            setDimension([window.innerWidth, window.innerHeight]);
        }
        console.log("Dimension", [window.innerWidth, window.innerHeight])
        setDimension([window.innerWidth, window.innerHeight]);
    }, [])

    return dimension;
}
