import { useState } from "react";
import PropTypes from "prop-types"

import { Navbar } from "../index"

const NavbarDropdownModel = ({logo, iconButtonMenu, data}) => {  
  const [isOpen, setIsOpen] = useState(false);

    return (
        <Navbar.Root>
        <Navbar.Icon src={logo}/>
        <Navbar.Content>
          <Navbar.ButtonMenu onClick={() => setIsOpen(!isOpen)}>
            <Navbar.Icon src={iconButtonMenu}/>
          </Navbar.ButtonMenu>
          <Navbar.Dropdown style={{ display: isOpen ? "flex" : "none" }}>
            {data.map((e, i) => {
              return (
                <Navbar.Item href={`#${e.hrefLink}`} key={i}>{e.textLink}</Navbar.Item>
              )
            })}
          </Navbar.Dropdown>
        </Navbar.Content>
      </Navbar.Root>
    )
}

NavbarDropdownModel.propTypes = {
  logo: PropTypes.string.isRequired,
  iconButtonMenu: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
}

export default NavbarDropdownModel