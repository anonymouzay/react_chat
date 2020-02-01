import React from 'react'

//importing css
import './InfoBar.css';
//importing icons
const onlineIcon=require('../../Icons/onlineIcon.png')
const closeIcon=require('../../Icons/closeIcon.png')

const InfoBar=(props)=>{
    return(
        <div className='infoBar' >
            <div className="leftInnerContainer">
                <img className='onlineIcon' src={onlineIcon} alt="online" />
                <h3>{props.room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href='/'> <img src={closeIcon} alt='close' /> </a>
            </div>
        </div>
    );    
}

export default InfoBar