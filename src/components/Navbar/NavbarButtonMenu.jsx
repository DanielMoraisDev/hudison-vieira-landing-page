import PropTypes from 'prop-types'

import { StyledNavbarButtonMenu } from './styles/NavbarButtonMenu'

const NavbarButtonMenu = ({children, ...props}) => {
    return (
        <StyledNavbarButtonMenu {...props}>
            {children}
        </StyledNavbarButtonMenu>
    )
}

NavbarButtonMenu.propTypes = {
    children: PropTypes.node,
}

export default NavbarButtonMenu