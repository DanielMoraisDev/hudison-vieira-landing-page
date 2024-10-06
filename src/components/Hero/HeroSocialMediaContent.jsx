import PropTypes from 'prop-types'

import { StyledSocialMediaContent } from './styles/HeroSocialMediaContent'

const HeroSocialMediaContent = ({ children, ...props }) => {
    return (
        <StyledSocialMediaContent {...props}>
            {children}
        </StyledSocialMediaContent>
    )
}

HeroSocialMediaContent.propTypes = {
    children: PropTypes.node,
}

export default HeroSocialMediaContent