import React from 'react'

// importing styles
import './Message.css'

const Message =({msg,name})=>{
    let isSentByCurrentUser=false;

    const trimedUsername=name.trim().toLowerCase();

    if(msg.user===trimedUsername){
        isSentByCurrentUser=true;
    }
    return (
        isSentByCurrentUser ?(
            <div className='messageContainer justifyEnd'>
                <p className='sentText pr-10'>{msg.user}</p>
                <div className='messageBox backgroundBlue'>
                    <p className='messageText colorWhite'>{msg.text}</p>
                </div>
            </div>
        ):(
            <div className='messageContainer justifyStart'>
            <div className='messageBox backgroundLight'>
                <p className='messageText colorDark'>{msg.text}</p>
            </div>
            <p className='sentText pl-10'>{msg.user}</p>
        </div>
        )
    );
}

export default Message;