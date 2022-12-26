import React from 'react'
import video from '../img/video-calling.png'
import add from '../img/add-user-button.png'
import more from '../img/more-button.png'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
        <div className="chatInfo">
            <span>Mily</span>
            <div className="chatIcons">
                <img src={video} alt="" />
                <img src={add} alt="" />
                <img src={more} alt="" />
                </div>
            </div>
            <Messages />
            <Input />
    </div>
  )
}

export default Chat