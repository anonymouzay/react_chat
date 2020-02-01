import React,{useState,useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
// importing the css for the component
import './Chat.css';
// importing components
import Input from "../Input/Input";
import InfoBar from '../InfoBar/InfoBar';
import Messages from '../Messages/Messages';
import RoomData from '../RoomData/RoomData';

let socket;

const Chat=()=>{

    const [name,setName]=useState('');
    const [room,setRoom]=useState('');
    const [msg,setMsg]=useState('');
    const [msgs,setMsgs]=useState([]);
    const [users,setUsers]=useState([]);
    const ENDPOINT = 'localhost:5000'

    useEffect(()=>{
        const {name,room} =queryString.parse(window.location.search);
        console.log(name,room);

        socket=io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join',{name,room})
        return () =>{
            socket.emit('disconnect')
            socket.off();
        }
    },[ENDPOINT,window.location.search]);
    useEffect(()=>{
        socket.on("message",(message)=>{
            setMsgs([...msgs,message])
        })
    },[msgs])
    useEffect(()=>{
        socket.on('roomData',(data)=>{
            setUsers(data.users);
        })
    },[users])
    const sendMessage=(event)=>{
        event.preventDefault();
        if(msg){
            socket.emit('sendMessage',msg,()=>setMsg(''))
        }
    }
    console.log(msg,msgs);
    
    return(
        <div className="outerContainer" >
            <div className="container">
                <InfoBar room={room}></InfoBar>
                <Messages msgs={msgs} name={name} />
                <Input msg={msg} setMsg={setMsg} sendMessage={sendMessage} />
            </div>
            <RoomData users={users} />
        </div>
    );
} 
export default Chat;