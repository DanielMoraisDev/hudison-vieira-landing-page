import PropTypes from 'prop-types'

import { StyledHeroRootBackground } from "./styles/HeroRootBackground"

const HeroRootBackground = ({ backgroundImage, children, ...props }) => {
    return (
        <StyledHeroRootBackground style={{backgroundImage: `url(${backgroundImage})`}} {...props}>
            {children}
        </StyledHeroRootBackground>
    )
}

HeroRootBackground.propTypes = {
    children: PropTypes.node,
    backgroundImage: PropTypes.node.isRequired
}

export default HeroRootBackground;