import PropTypes from 'prop-types'

import { StyledHeroContent } from './styles/HeroContent'

const HeroContent = ({ children, ...props }) => {
    return (
        <StyledHeroContent {...props}>
            {children}
        </StyledHeroContent>
    )
}

HeroContent.propTypes = {
    children: PropTypes.node,
}

export default HeroContent