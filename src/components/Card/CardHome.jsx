import PropTypes from 'prop-types'

import { StyledCardHome } from './styles/CardHome'

const CardHome = ({ children, ...props }) => {
    return (
        <StyledCardHome {...props}>
            {children}
        </StyledCardHome>
    )
}

CardHome.propTypes = {
    children: PropTypes.node,
}

export default CardHome