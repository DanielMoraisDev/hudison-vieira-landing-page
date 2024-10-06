import PropTypes from 'prop-types'

import { StyledContent } from './styles/HeroContent'

const HeroContent = ({ children, ...props }) => {
    return (
        <StyledContent {...props}>
            {children}
        </StyledContent>
    )
}

HeroContent.propTypes = {
    children: PropTypes.node,
}

export default HeroContent