import React from "react";
import s from "./Nav.module.css";
import Friends from './Friends/Friends'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.menu}>
        <div className={s.item}>
          <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.item}>
          <a>News</a>
        </div>
        <div className={s.item}>
          <a>Music</a>
        </div>
      </div>
      <Friends />

    </nav>
  );
};

export default Nav;
