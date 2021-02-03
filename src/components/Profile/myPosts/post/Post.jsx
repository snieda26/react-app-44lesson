import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={s.posts}>
        <div className={s.item}>
          <img src="https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg" />
          {props.message}
        </div>
      </div>
    </div>
  );
};

export default Post;
