import React from "react";
import { addMassageAction } from '../../redux/state'
import StoreContext from "../../StoreContext";
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {
  debugger;

  const addMessage = (text) => {
    props.dispatch(addMassageAction(text))
  }


  const changeValue = (text) => {
    props.dispatch({
      type: "UPDATE-NEW-MESSAGE-TEXT",
      text: text
    })

  }

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          return (
            <Dialogs addMessage={addMessage}
              changeValue={changeValue}
              dialogs={store.getState().messagesPage.dialogs}
              messages={store.getState().messagesPage.messages}
              messageText={store.getState().messageText} />
          )

        }
      }

    </StoreContext.Consumer>

  );
};

export default DialogsContainer;
