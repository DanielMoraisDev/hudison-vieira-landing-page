import PropTypes from "prop-types"

import { StyledNavbarList } from "./styles/NavbarList"

const NavbarList = ({children, ...props}) => {
    return (
        <StyledNavbarList {...props}>
            {children}
        </StyledNavbarList>
    )
}

NavbarList.propTypes = {
    children: PropTypes.node,
}

export default NavbarList