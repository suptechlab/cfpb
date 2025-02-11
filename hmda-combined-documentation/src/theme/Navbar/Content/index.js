import React from "react"
import Header from './Header'
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';

const Navbar = () => {
  const mobileSidebar = useNavbarMobileSidebar();
  return (
    <>
      <Header />
      <div id='fig-titlebar'>
        {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
        <span>Documentation Menu</span>
      </div>
    </>
  )
}

export default Navbar