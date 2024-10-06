import PropTypes from 'prop-types'

import { StyledCardContent } from './styles/CardContent'

const CardContent = ({ children, ...props }) => {
    return (
        <StyledCardContent {...props}>
            {children}
        </StyledCardContent>
    )
}

CardContent.propTypes = {
    children: PropTypes.node,
}

export default CardContent