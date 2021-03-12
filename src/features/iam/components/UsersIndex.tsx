import React, {useEffect, useState, useMemo, useRef} from "react"
import { Table, Button, Pagination, Form, Row, Col } from 'react-bootstrap'
import { BsEyeFill, BsTrashFill } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import Qs from "qs"
import { Link, useLocation, useRouteMatch } from "react-router-dom"
import { getUsers, getUsersPagination, getUsersFilter } from "../selectors"
import { Users } from "../services"
import UsersPagination from "./UsersPagination"
import { FaFilter, FaUserPlus } from "react-icons/fa"
import UsersFilter from "./UsersFilter"
// import FilterUsersForm from "./FilterUsersForm"

export default ()=>{  
  const dispatch = useDispatch()
  const { search, state: locationState } = useLocation<{page: any, filter: any}>()
  const { url, path } = useRouteMatch()
  const [usersFilterVisible, showUsersFilter] = useState(false)
  const users = useSelector(getUsers)
  const {current, size} = useSelector(getUsersPagination)
  const filter = useSelector(getUsersFilter)
  // const parsedSearch = useMemo(()=>Qs.parse(search.substr(1)), [search])
  // const mergedSearch = useRef<any>()
  // const lastParsedSearch = useRef<any>()
  // useEffect(()=>{
  //   if(lastParsedSearch.current != parsedSearch){
  //     lastParsedSearch.current = parsedSearch
  //     mergedSearch.current = {
  //       page: {
  //         ...page,
  //         ...(parsedSearch.page as Qs.ParsedQs || {})
  //       },
  //       filter: {
  //         ...filter,
  //         ...(parsedSearch.fiter as Qs.ParsedQs || {})
  //       }
  //     }
  //     dispatch({
  //       type: "UPDATE_USERS_PAGINATION",
  //       payload: mergedSearch.current.page
  //     })
  //   }
  // }, [page, filter, parsedSearch])

  // useEffect(()=>{
  //   if(mergedSearch.current){
  //     Users.loadAll(mergedSearch.current.page as any, mergedSearch.current.filter as any)
  //     .then(({data})=>{
  //       dispatch({
  //         type: "LOAD_USERS_COMPLETED",
  //         payload: data
  //       })
  //       console.log(data)
  //     })
  //   }
  // }, [mergedSearch.current])

  useEffect(()=>{
    document.title = "Usuarios"
  }, [])
 
  useEffect(()=>{
    console.log({
      
    }, filter)
    Users.loadAll({current, size}, filter)
    .then(({data})=>{
      dispatch({
        type: "LOAD_USERS_COMPLETED",
        payload: data
      })
      console.log(data)
    })
  }, [current, size, filter])

  return <div style={{minWidth: 480}} className="d-flex flex-column bg-white rounded-lg shadow-sm m-2 p-3 flex-grow-1">
    <h1 style={{fontSize: "2rem"}}>Usuarios</h1>
    <Row className="justify-content-end" >
      <Col className={"pr-0"} xs="auto" >
        <Button className="my-2" onClick={()=>{
          showUsersFilter(visible=>!visible)
        }}><FaFilter /></Button>
      </Col>
      <Col xs="auto">
        <Button className="my-2" onClick={()=>{
          // showUserRegistrationModal()
        }}><FaUserPlus /></Button>
      </Col>
    </Row>
    <UsersFilter className={"mt-2" + (usersFilterVisible ? "" : " d-none")} onSubmit={()=>showUsersFilter(false)} />
    <Table responsive className="small text-nowrap">
      <thead>
        <tr>
          <th style={{width: 1}}>#</th>
          <th >Nombre de usuario</th>
          <th style={{width: "6rem"}}>Estado</th>
          <th style={{width: 1}}></th>
        </tr>
      </thead>
      <tbody>
        {users.map((u, i)=>{
          return <tr key={u.id}>
            <th scope="row">
              {i+1}
            </th>
            <td>{u.username}</td>
            <td className={u.active ? "bg-success" : "bg-danger"}><span className="text-light">{u.active ? "Activo" : "Inactivo"}</span></td>
            <td>
              <div className="d-flex">
                <Button className="btn-icon" variant="link" ><BsEyeFill /></Button>
                {/* <Button className="btn-icon d-inline" variant="link" ><BsTrashFill /></Button> */}
              </div>
            </td>
          </tr>
        })}
      </tbody>
    </Table>
    <div className="mt-auto align-self-center">
      <UsersPagination />
    </div>
  </div>
}