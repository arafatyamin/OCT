import React from 'react'
import Photo from '../img/photo.png'
import Attach from '../img/attach.png'


const Input = () => {
  return (
    <div className='input'>
        <input type="text" />
        <div className="send">
            <img src={Attach} alt="" />
            <input style={{display:"none"}} type="file" name="" id="file" />
            <label htmlFor="file">
                <img src={Photo} alt="" />
            </label></div>
    </div>
  )
}

export default Input