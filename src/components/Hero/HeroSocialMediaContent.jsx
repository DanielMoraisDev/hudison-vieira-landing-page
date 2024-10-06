import PropTypes from 'prop-types'

import { StyledHeroSocialMediaContent } from './styles/HeroSocialMediaContent'

const HeroSocialMediaContent = ({ children, ...props }) => {
    return (
        <StyledHeroSocialMediaContent {...props}>
            {children}
        </StyledHeroSocialMediaContent>
    )
}

HeroSocialMediaContent.propTypes = {
    children: PropTypes.node,
}

export default HeroSocialMediaContent