import { listeners } from "process";
import React, {useState, useEffect} from "react"
import useCallbackRef from "./useCallbackRef"

export default (props: React.ComponentProps<'input'> & {}) => {
    const [count, setCount] = useState(0);
    let {placeholder} = props

    useEffect(()=>{
        setInterval(()=>{
            setCount((count)=>(count+1)%3)
        }, 1000)
    }, [])
    const loadingPlaceholder = "Buscando"
    placeholder = loadingPlaceholder + (new Array(count).join("\2026"))
    return <input {...props} placeholder={placeholder} />
}