import PropTypes from "prop-types"

import { Navbar } from "../index"

const NavbarRowModel = ({data, logo}) => {  
    return (
        <Navbar.Root>
        <Navbar.Icon src={logo}/>
        <Navbar.Content>
          <Navbar.List>
          {data.map((e, i) => {
              return (
                <Navbar.Item href={`#${e.hrefLink}`} key={i}>{e.textLink}</Navbar.Item>
              )
            })}
          </Navbar.List>
        </Navbar.Content>
      </Navbar.Root>
    )
}

NavbarRowModel.propTypes = {
  data: PropTypes.array.isRequired,
  logo: PropTypes.string.isRequired
}

export default NavbarRowModel