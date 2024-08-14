import React, { useState , useContext} from 'react'
import './Message.css'
import ReplyBox from '../../CommentsBox/ReplyBox'

const showReply = React.createContext();
export function useOpenReply(){
  return useContext(showReply);
}

const Message = (props) => {
  const Down = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 18 10">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
  const Up = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 18 10">
                  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                </svg>

  const [arrowUp, setArrowUp] = useState(false);
  const [openReply, setOpenReply] = useState(false);

  //taggle when cancel button and reply button are pressed
  const changeOpenReply = () => {
    setOpenReply(prevState => prevState = !prevState);
  }

  //delete a message
  const deleteMessage = () => {

  }

  //Toggle arrow up and down 
  let arrow = Down;
  const changeArrow = () => {
    setArrowUp(prevState => prevState = !prevState);
  }
  if(arrowUp){
    arrow = Up;
  }
  else{
    arrow = Down;
  }

  
  return (
   <>
   <section className='messageContainer'>
        <div className='messageUser'> {props.user} </div>
        <div className='messageText'> {props.message} </div>
        <section className='messageIconContainer'>
            <section className='arrowReplies' onClick={changeArrow}>
                  {arrow}
                  <div>View replies</div>
            </section>
           
                <div style={{cursor: "pointer"}} onClick={changeOpenReply}>Reply</div>
                <div style={{cursor: "pointer"}}>Edit</div>
                <div style={{cursor: "pointer"}} onClick={deleteMessage}>Delete</div>
    
        </section>
        <showReply.Provider value={changeOpenReply}>
          {openReply && <ReplyBox autoFocus={true}></ReplyBox>}
        </showReply.Provider>
   </section>
   </>
  )
}

export default Message
