import PropTypes from "prop-types"

import { StyledNavbarItem } from "./styles/NavbarItem"

const NavbarItem = ({children, ...props}) => {
    return (
        <StyledNavbarItem {...props}>
            {children}
        </StyledNavbarItem>
    )
}

NavbarItem.propTypes = {
    children: PropTypes.node,
}

export default NavbarItem