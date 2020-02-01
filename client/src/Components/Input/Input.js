import React from 'react'

// imporing css
import "./Input.css";

const Input=(props)=>(
    <form className="form">
        <input className='input' placeholder='Type a message...'  value={props.msg} type="text" onChange={(event)=>props.setMsg(event.target.value)} />
        <button className='sendButton' onClick={(event)=> props.sendMessage(event)}> Send </button>
    </form>
);

export default Input;