import PropTypes from 'prop-types'

import { StyledHeroRootBackground } from "./styles/HeroRootBackground"

const HeroRootBackground = ({ children, ...props }) => {
    return (
        <StyledHeroRootBackground {...props}>
            {children}
        </StyledHeroRootBackground>
    )
}

HeroRootBackground.propTypes = {
    children: PropTypes.node,
    backgroundImage: PropTypes.node.isRequired
}

export default HeroRootBackground;