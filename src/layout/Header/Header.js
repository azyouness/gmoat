import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { MdTune as SettingsIcon, MdMenu as MenuIcon } from "react-icons/md";
import { useDispatch, updateSearch, updateSort } from "storeProvider/actions";
import Nav from "./Nav";
import Logo from "./Logo";
import HeaderButton from "./HeaderButton";
import SettingsBox from "./SettingsBox";
import styles from "./Header.module.scss";

const Header = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const showSettingsBox = pathname.includes("/lists/");
  // components states
  const [openNav, setOpenNav] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  // event handlers
  const handleSettingsButtonClick = (e) => {
    e.preventDefault();

    // reset settings on settingsbox close
    if (openSettings) {
      dispatch(updateSort());
      dispatch(updateSearch(""));
    }
    // close nav on settingsbox open
    else {
      setOpenNav(false);
    }
    
    setOpenSettings(!openSettings);
  };

  const handleNavLinkClick = () => {
    setOpenNav(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.nav}>
          <Nav 
            open={openNav} 
            onLinkClick={handleNavLinkClick} 
          />
        </div>
        <div className={styles.buttons}>
          {showSettingsBox && <HeaderButton
            active={openSettings}
            onClick={handleSettingsButtonClick}
            icon={SettingsIcon}
          />}
          <HeaderButton
            active={openNav}
            onClick={e => setOpenNav(!openNav)}
            icon={MenuIcon}
            className={styles.navButton}
          />
        </div>
      </div>
      {showSettingsBox && <SettingsBox
        open={openSettings}
        onSearchChange={value => dispatch(updateSearch(value))}
        onSortChange={(by, asc) => dispatch(updateSort(by, asc))}
      />}
    </div>
  );
};

export default Header;
