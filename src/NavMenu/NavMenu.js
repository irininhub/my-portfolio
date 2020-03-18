import React from 'react';
import s from './NavMenu.module.css'

function NavMenu () {
  return (
      <div className={s.nav}>
        <a href="#" className={s.link}>MAIN</a>
        <a href="#skills" className={s.link}>SKILLS</a>
        <a href="#project" className={s.link}>PROJECTS</a>
        <a href="#contacts" className={s.link}>CONTACTS</a>

      </div>
  );
}

export default NavMenu;
