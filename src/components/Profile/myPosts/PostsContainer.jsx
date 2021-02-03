import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state'
import StoreContext from "../../../StoreContext";
import Posts from "./Posts";


const PostsContainer = (props) => {

  let addPost = () => {
    let action = addPostActionCreator()
    props.dispatch(action)

  }

  let changeText = (text) => {
    let action = updateNewPostTextActionCreator(text)
    props.dispatch(action)

  }
  return (
    <StoreContext.Consumer >
      {
        (store) => {

          return (<Posts addPost={addPost} updateNewPostText={changeText}
            postsData={store.getState().profilePage.postsData}
            newPostText={store.getState().profilePage.newPostText} />)
        }
      }

    </StoreContext.Consumer>
  )
};

export default PostsContainer;
