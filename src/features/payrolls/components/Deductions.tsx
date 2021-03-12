import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default ()=>{
  return <div className="d-flex flex-column bg-white rounded-lg shadow-sm m-2 p-3 flex-grow-1">
  <h1 style={{fontSize: "2rem"}}>Deducciones</h1>
  <div className="list-details position-relative d-flex flex-grow-1">
    <div className="list">
    <ListGroup className="flex-grow-1" defaultActiveKey="#link1">
      <ListGroup.Item action href="#link1">
        Link 1
      </ListGroup.Item>
    </ListGroup>
    </div>
    <div className="p-3 border flex-grow-1"  style={{marginLeft: "11rem"}}>

    </div>
  </div>
</div>
} 