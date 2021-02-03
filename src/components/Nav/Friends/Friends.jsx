import React from "react";
import s from "./Friends.module.css";
import Friend from './Friend/Friend'

const Friends = () => {
  return (
    <div className={s.friends}>
      <Friend name='Oleg' />
      <Friend name="Olga" />
      <Friend name="Maks" />
    </div>

  );
};

export default Friends;
