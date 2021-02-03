import React from "react";
import s from "./Friend.module.css";

const Friend = (props) => {
    return (
        <div className={s.friend}>
            <img src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" alt="avatar profile" />
            <div className={s.name}>{props.name}</div>
        </div>

    );
};

export default Friend;
