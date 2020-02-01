import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
// importing components
import Message from './Message/Message'
// importing styles
import './Messages.css';

const Messages=(props)=>(
    <ScrollToBottom className="messages"> 
        {props.msgs.map((msg,i)=><div  key={i}><Message msg={msg} name={props.name}/></div>)}
    </ScrollToBottom>
)
export default Messages;