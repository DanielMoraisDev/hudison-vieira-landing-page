import PropTypes from 'prop-types'

import { StyledCardRoot } from './styles/CardRoot'

const CardRoot = ({ children, ...props }) => {
    return (
        <StyledCardRoot {...props}>
            {children}
        </StyledCardRoot>
    )
}

CardRoot.propTypes = {
    children: PropTypes.node,
}

export default CardRoot