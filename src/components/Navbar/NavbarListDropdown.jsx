import PropTypes from "prop-types"

import { StyledNavbarListDropdown } from "./styles/NavbarListDropdown"

const NavbarListDropdown = ({children, ...props}) => {
    return (
        <StyledNavbarListDropdown {...props}>
            {children}
        </StyledNavbarListDropdown>
    )
}

NavbarListDropdown.propTypes = {
    children: PropTypes.node,
}

export default NavbarListDropdown