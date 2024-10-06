import PropTypes from 'prop-types'

import { StyledContainerAlternative } from './styles/ContainerAlternative'

const ContainerAlternative = ({ children, ...props }) => {
    return (
        <StyledContainerAlternative {...props}>
            {children}
        </StyledContainerAlternative>
    )
}

ContainerAlternative.propTypes = {
    children: PropTypes.node,
}

export default ContainerAlternative