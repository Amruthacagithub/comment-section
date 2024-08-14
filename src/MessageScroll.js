import React from 'react'
import Message from './Components/Message/SubMessage/Message';

const MessageScroll = (props) => {
  return (
    <>
    <Message user="Dummy User" editable={false} message="Dummy Message"></Message>
    <div className='bottomBar'> <div className='loader'></div> </div>
    </>
  )
}

export default MessageScroll
