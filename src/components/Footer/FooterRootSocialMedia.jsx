import PropTypes from "prop-types"

import { StyledFooterRootSocialMedia } from "./styles/FooterRootSocialMedia"

const FooterRootSocialMedia = ({children, ...props}) => {
    return (
        <StyledFooterRootSocialMedia {...props}>
            {children}
        </StyledFooterRootSocialMedia>
    )
}

FooterRootSocialMedia.propTypes = {
    children: PropTypes.node.isRequired
}

export default FooterRootSocialMedia