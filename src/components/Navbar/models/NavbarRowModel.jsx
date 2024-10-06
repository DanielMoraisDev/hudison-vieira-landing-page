import PropTypes from "prop-types"

import { Navbar } from "../index"

const NavbarRowModel = ({logo}) => {  
    return (
        <Navbar.Root>
        <Navbar.Icon src={logo}/>
      </Navbar.Root>
    )
}

NavbarRowModel.propTypes = {
  logo: PropTypes.string.isRequired
}

export default NavbarRowModel