import PropTypes from 'prop-types'

import { StyledInputRoot } from './styles/InputRoot'

const InputRoot = ({ children, ...props }) => {
    return (
        <StyledInputRoot {...props}>
            {children}
        </StyledInputRoot>
    )
}

InputRoot.propTypes = {
    children: PropTypes.node,
}

export default InputRoot
