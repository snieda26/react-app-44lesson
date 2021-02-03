import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem'
import Message from './DialogItem/Message/Message'

const Dialogs = (props) => {
  debugger;
  let textRef = React.createRef()

  const onAddMessage = () => {
    let text = textRef.current.value
    props.addMessage(text)

  }

  const changeMessageValue = () => {
    let text = textRef.current.value
    props.changeValue(text)
  }


  let dialogsElements = props.dialogs.map((el) => <DialogItem name={el.name} id={el.id} />)

  let messagesElements = props.messages.map((el) => <Message message={el.message} id={el.id} />)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogsElements}
      </div>

      {/* messages */}

      <div className={s.messages}>
        {messagesElements}
      </div>


      {/* add message */}
      <div>
        <div><textarea ref={textRef} value={props.messageText} onChange={changeMessageValue}></textarea></div>

        <div><button onClick={onAddMessage}>add</button></div>
      </div>

    </div>
  );
};

export default Dialogs;
