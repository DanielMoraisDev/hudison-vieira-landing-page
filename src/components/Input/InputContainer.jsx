import PropTypes from 'prop-types'

import { StyledInputContainer } from './styles/InputContainer'

const InputContainer = ({ children, ...props }) => {
    return (
        <StyledInputContainer {...props}>
            {children}
        </StyledInputContainer>
    )
}

InputContainer.propTypes = {
    children: PropTypes.node,
}

export default InputContainer