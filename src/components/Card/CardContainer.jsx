import PropTypes from 'prop-types'

import { StyledCardContainer } from './styles/CardContainer'

const CardContainer = ({ children, ...props }) => {
    return (
        <StyledCardContainer {...props}>
            {children}
        </StyledCardContainer>
    )
}

CardContainer.propTypes = {
    children: PropTypes.node,
}

export default CardContainer