import React from "react";
import s from "./ProfileInfo.module.css";


const ProfileInfo = () => {
  return (
    <div className={s.profileInfo}>
      <img src="https://img.freepik.com/free-vector/wide-tropical-beach-background_88088-600.jpg?size=626&ext=jpg&ga=GA1.2.247785121.1604966400" />
      <div className={s.description}>
        ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
