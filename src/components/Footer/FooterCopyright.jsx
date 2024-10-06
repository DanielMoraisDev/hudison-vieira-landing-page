import PropTypes from "prop-types"

import { StyledFooterCopyright } from "./styles/FooterCopyright"

const FooterCopyright = ({children, ...props}) => {
    return (
        <StyledFooterCopyright {...props}>
            {children}
        </StyledFooterCopyright>
    )
}

FooterCopyright.propTypes = {
    children: PropTypes.node.isRequired
}

export default FooterCopyright