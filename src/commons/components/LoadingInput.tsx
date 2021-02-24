import React, {useState, useEffect} from "react"

export const LoadingInput = (props: React.ComponentProps<'input'> & { loading: boolean }) => {
    const [count, setCount] = useState(0);
    const {placeholder, loading} = props

    useEffect(()=>{
        const timeout = setInterval(()=>{
            setCount((count)=>(count+1)%3)
        }, 1000)
        return ()=>clearInterval(timeout)
    }, [])
    const loadingPlaceholder = placeholder + (loading ? (new Array(count+1).join('.')) : "")
    return <input {...props} placeholder={loadingPlaceholder} />
}