import PropTypes from "prop-types"

import { StyledFooterContent } from "./styles/FooterContent"

const FooterContent = ({children, ...props}) => {
    return (
        <StyledFooterContent {...props}>
            {children}
        </StyledFooterContent>
    )
}

FooterContent.propTypes = {
    children: PropTypes.node.isRequired
}

export default FooterContent