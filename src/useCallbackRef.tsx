import {useRef, useEffect, DependencyList, MutableRefObject} from 'react'

export default function useCallbackRef<T extends (...args: any[]) => any>(callback:  T, deps: DependencyList): MutableRefObject<T>{
    const callbackRef = useRef(callback)
    useEffect(()=>{
      callbackRef.current = callback
    }, [deps])
    return callbackRef
  }