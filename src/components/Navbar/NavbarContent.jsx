import PropTypes from "prop-types"

import { StyledNavbarContent } from "./styles/NavbarContent"

const NavbarContent = ({children, ...props}) => {
    return (
        <StyledNavbarContent {...props}>
            {children}
        </StyledNavbarContent>
    )
}

NavbarContent.propTypes = {
    children: PropTypes.node,
}

export default NavbarContent