import React from 'react'

import './RoomData.css'

const RoomData =(props)=>(
    <div className="RoomContainer" >
        <h3>Users in Room</h3>
        {props.users.map((user)=>( <div className='roomUser'> {user.name}</div> ))}
    </div>
)
export default RoomData;