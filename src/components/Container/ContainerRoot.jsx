import PropTypes from 'prop-types'

import { StyledContainerRoot } from './styles/ContainerRoot'

const ContainerRoot = ({ children, ...props }) => {
    return (
        <StyledContainerRoot {...props}>
            {children}
        </StyledContainerRoot>
    )
}

ContainerRoot.propTypes = {
    children: PropTypes.node,
}

export default ContainerRoot