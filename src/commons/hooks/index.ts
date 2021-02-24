import { useRef, useEffect, useState, useCallback, DependencyList, MutableRefObject, useMemo } from 'react'

export const useCallbackRef = <T extends (...args: any[]) => any>(callback: T, deps: DependencyList): MutableRefObject<T> => {
  const callbackRef = useRef(callback)
  useEffect(() => {
	callbackRef.current = callback
  }, [deps])
  return callbackRef
}
type FetchState = {
  completed?: boolean,
  data?: any,
  error?: boolean
}

type Fetcher = [
  state: FetchState,
  send: ()=>void
]

export const useFetch = (callback: ()=>Promise<Response> | Promise<Response[]>, deps: DependencyList):Fetcher=>{
  const [state, setState] = useState<FetchState>({});
  const fetchRef = useCallbackRef(callback, deps)
  const send = useCallback(()=>{
    const request = async ()=>{
      setState({
        completed: false,
      })
      const response = await fetchRef.current()
      const data = await (Array.isArray(response) ? Promise.all(response.map(r=>r.json())) : response.json())
      if(Array.isArray(response) ? response.every(r=>r.ok) : response.ok){
        setState({
          completed: true,
          data,
          error: false
        })
      }
      else{
        setState({
          completed: true,
          data,
          error: false
        })
      }
    }
    request().catch((e)=>{
      setState({
        completed: true,
        error: true
      })
    })
  },[])

  return [state, send]
}