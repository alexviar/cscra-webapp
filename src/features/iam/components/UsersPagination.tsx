import { useMemo, useEffect } from "react"
import { Pagination } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation } from "react-router-dom"
import Qs from 'qs'
import { getUsersPagination } from "../selectors"

export default ()=>{
  const {pathname, search} = useLocation()
  const dispatch = useDispatch()
  const {total, current, size} = useSelector(getUsersPagination)
  const parsedSearch = useMemo(()=>Qs.parse(search.substr(1)), [search])
  const {page} = parsedSearch as any

  // useEffect(()=>{
  //   if(page){
  //     dispatch({
  //       type: "UPDATE_USERS_PAGINATION",
  //       payload: {
  //         current: parseInt(page.current) || current,
  //         size: parseInt(page.size) || size
  //       }
  //     })
  //   }
  // }, [page])

  // const links = useMemo(()=>{
  //   const parsedSearch = Qs.parse(search.substr(1))
  //   return {
  //     first: `${pathname}?${Qs.stringify({
  //       ...parsedSearch,
  //       page: {
  //         current: 1,
  //         size
  //       }
  //     })}`
  //   }
  // }, [search, pathname, total, current, size])

  console.log(total, current, size)
  const pageItems = []
  const firstPage = Math.max(1, current - 4)
  const lastPage = Math.min(Math.trunc((total-size)/size)+1, firstPage+10)
  for(let i = firstPage; i <= lastPage; i++){
    if(current == i)
      pageItems.push(<Pagination.Item key={i} active={true}>{i}</Pagination.Item>)
    else
      pageItems.push(<Pagination.Item key={i} as={Link} href={`${pathname}?${Qs.stringify({...parsedSearch, page: {current: i, size}}, { arrayFormat: "brackets", encode: false})}`} to={`${pathname}?${Qs.stringify({...parsedSearch, page: {current: i, size}}, { arrayFormat: "brackets", encode: false})}`}>{i}</Pagination.Item>)
  }
  //@ts-ignore
  return <Pagination>
    {current - 5 > 0 ? <Pagination.First as={Link}
      href={`${pathname}?${Qs.stringify({...parsedSearch, page: {current: 1, size}}, { arrayFormat: "brackets", encode: false})}`}
      //@ts-ignore
      to={`${pathname}?${Qs.stringify({...parsedSearch, page: {current: 1, size}}, { arrayFormat: "brackets", encode: false})}`} /> : null}
    {current > 1 ? <Pagination.Prev as={Link}
      href={`${pathname}?${Qs.stringify({...parsedSearch, page: {current: current - 1, size}}, { arrayFormat: "brackets", encode: false})}`}
      //@ts-ignore
      to={`${pathname}?${Qs.stringify({...parsedSearch, page: {current: current - 1, size}}, { arrayFormat: "brackets", encode: false})}`} /> : null}
    
    {pageItems}
    
    {current < (total-size)/size + 1 ? <Pagination.Next as={Link}
      href={`${pathname}?${Qs.stringify({...parsedSearch, page: {current: current + 1, size}}, { arrayFormat: "brackets", encode: false})}`}
      //@ts-ignore
      to={`${pathname}?${Qs.stringify({...parsedSearch, page: {current: current + 1, size}}, { arrayFormat: "brackets", encode: false})}`} /> : null}
    {current + 5 < (total-size)/size + 1 ? <Pagination.Last as={Link}
      href={`${pathname}?${Qs.stringify({...parsedSearch, page: {current: (total-size)/size + 1, size}}, { arrayFormat: "brackets", encode: false})}`}
      //@ts-ignore
      to={`${pathname}?${Qs.stringify({...parsedSearch, page: {current: (total-size)/size + 1, size}}, { arrayFormat: "brackets", encode: false})}`} /> : null}
      
  </Pagination>
}