import PropTypes from "prop-types"

import { StyledFooterRoot } from "./styles/FooterRoot"

const FooterRoot = ({children, ...props}) => {
    return (
        <StyledFooterRoot {...props}>
            {children}
        </StyledFooterRoot>
    )
}

FooterRoot.propTypes = {
    children: PropTypes.node.isRequired
}

export default FooterRoot