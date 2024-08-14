import React, {useRef, useState} from 'react'
import './CommentsBox.css'
import { useOpenReply } from '../Message/SubMessage/Message';

const ReplyBox = (props) => {

    const changeOpenReply = useOpenReply();

    const nameRef = useRef(null);
    const messageRef = useRef(null);
    //True on focus, false on cancel press
    const [showButtons, setShowButtons] = useState(false)
    //True on input data. False when input is blank
    const [enableBtn, setEnableBtn] = useState(true);

    //When they click on the input. show the underline and the buttons
    const commentFocus = () => {
        setShowButtons(true);
    }

    //When they click on the input. Hide the underLine 
    const commentFocusOut = () => {
        
    }

    //Enable/disable the comment button based on input values
    const validateInput = () => {
        const currName = nameRef.current.value.trim();
        const currMessage = messageRef.current.value.trim()
        if(currName && currMessage){
            setEnableBtn(false);
        }
        else{
            setEnableBtn(true);
        }
    }

    //send comment 
    const sendComment = (event) => {
        event.preventDefault();
    }



  return (
    <form>
       <section className='Comment-Box'>
        <h3>Reply</h3>

        {/* {Name input form} */}
        <div className='form-group'>
            <input
                 autoFocus={props.autoFocus}
                 type='text'
                 placeholder='Name'
                 ref={nameRef}
                 onFocus={commentFocus}
                 onBlur={commentFocusOut}
                 onKeyUp={validateInput}
            />
        </div>

        {/* {Comment input form } */}
        <div className='form-group'>
            <input
                 autoFocus={props.autoFocus}
                 type='text'
                 placeholder='Comment'
                 ref={messageRef}
                 onFocus={commentFocus}
                 onBlur={commentFocusOut}
                 onKeyUp={validateInput}
            />
        </div>

        {/* {Buttons} */}
        {showButtons && (
            <>
            <button className='commentButton sendButton' disabled={enableBtn} onClick={sendComment}> Comment</button>
            <button className='commentButton' style={{color: "grey", backgroundColor: "transparent"}} 
            onClick={() => {
                setShowButtons(false);
                nameRef.current.value = ""
                messageRef.current.value = ""
                setEnableBtn(true);
                changeOpenReply()
            }}
            >Cancel</button>
            </>
        )}
        

       </section>

    </form>
  )
}

export default ReplyBox
