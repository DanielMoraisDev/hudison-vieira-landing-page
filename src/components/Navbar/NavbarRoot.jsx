import PropTypes from "prop-types"

import { StyledNavbarRoot } from "./styles/NavbarRoot"

const NavbarRoot = ({children, ...props}) => {
    return (
        <StyledNavbarRoot {...props}>
            {children}
        </StyledNavbarRoot>
    )
}

NavbarRoot.propTypes = {
    children: PropTypes.node,
}

export default NavbarRoot