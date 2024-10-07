import PropTypes from 'prop-types'

import { StyledContainerSecond } from './styles/ContainerSecond'

const ContainerSecond = ({ children, ...props }) => {
    return (
        <StyledContainerSecond {...props}>
            {children}
        </StyledContainerSecond>
    )
}

ContainerSecond.propTypes = {
    children: PropTypes.node,
}

export default ContainerSecond