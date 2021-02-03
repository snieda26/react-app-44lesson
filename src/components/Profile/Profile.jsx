import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from './ProfileInfo/ProfileInfo'
import PostsContainer from "./myPosts/PostsContainer";
// import { textarea, addBtn } from "./myPosts/post/Post";

// console.log(textarea, addBtn);

const Profile = (props) => {
  return (
    <div className={s.profile}>

      <ProfileInfo />

      <div className="posts">
        <PostsContainer profilePage={props.state} dispatch={props.dispatch} />
      </div>
    </div>
  );
};

export default Profile;
