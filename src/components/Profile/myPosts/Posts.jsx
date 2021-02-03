import React from "react";
import Post from "./post/Post";
import s from './Posts.module.css'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state'


const Posts = (props) => {
  debugger;


  let posts = props.postsData.map((el) => <Post message={el.message} />);

  let textElement = React.createRef()

  let onAddPost = () => {
    props.addPost()

  }

  let changeAreaValue = () => {
    let text = textElement.current.value
    props.updateNewPostText(text)
  }



  return (
    <div>
      <div className={s.textarea}>
        <textarea ref={textElement} onChange={changeAreaValue} value={props.newPostText}></textarea>
      </div>


      <div className={s.buttons}>
        <button className={s.add} onClick={onAddPost}>add post</button>
        <button className={s.remove}> remove post</button>
      </div>

      <div>
        {posts}
      </div>
    </div>
  );
};

export default Posts;
