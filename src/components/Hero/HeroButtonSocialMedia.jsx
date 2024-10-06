import PropTypes from 'prop-types'

import { StyledHeroButtonSocialMedia } from "./styles/HeroButtonSocialMedia"

const HeroButtonSocialMedia = ({socialMediaLink, ...props }) => {
    const handleClick = () => {
        window.open(socialMediaLink, '_blank');
    };

    return (
        <StyledHeroButtonSocialMedia onClick={handleClick} {...props} />
    )
}

HeroButtonSocialMedia.propTypes = {
    socialMediaLink: PropTypes.string.isRequired,
}


export default HeroButtonSocialMedia;