import PropTypes from 'prop-types'

import { StyledCarrosselContainerCard } from "./styles/CarrosselContainerCard"

const CarrosselContainerCard = ({ children, ...props }) => {
    return (
        <StyledCarrosselContainerCard {...props}>
            {children}
        </StyledCarrosselContainerCard>
    )
}

CarrosselContainerCard.propTypes = {
    children: PropTypes.node,
}

export default CarrosselContainerCard