import PropTypes from 'prop-types'

import { StyledCardMid } from './styles/CardMid'

const CardMid = ({ children, ...props }) => {
    return (
        <StyledCardMid {...props}>
            {children}
        </StyledCardMid>
    )
}

CardMid.propTypes = {
    children: PropTypes.node,
}

export default CardMid