import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { LISTS } from "utils/constants";
import styles from "./Nav.module.scss";

const NavLink = ({ link, children, ...rest }) => {
  return (
    <RouterNavLink to={link} className={styles.link} activeClassName={styles.active} {...rest}>
      {children}
    </RouterNavLink>
  );
}

export const Nav = ({ open, onLinkClick }) => {
  const links = [];
  for(const id in LISTS) links.push({ name: LISTS[id].name, link: `/lists/${id}` });
  links.push({ name: "About", link: "/about" });

  return (
    <nav className={`${styles.nav} ${open ? styles.open : ""}`}>
      {links.map(({ name, link }) => (
        <NavLink key={name} link={link} onClick={onLinkClick}>
          {name}
        </NavLink>
      ))}
    </nav>
  );
}

export default Nav;
