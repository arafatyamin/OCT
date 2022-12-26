import React from 'react'

const Message = () => {
  return (
    <div className="message owner">
        <div className="messageInfo">
            <img src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="" />
            <span>just now</span>
        </div>
        <div className="messageContent">
            <p>hello</p>
            <img src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="" />
        </div>
    </div>
  )
}

export default Message