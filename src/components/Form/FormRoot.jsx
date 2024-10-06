import PropTypes from 'prop-types'

import { StyledFormRoot } from "./styles/FormRoot"

const FormRoot = ({ children, ...props }) => {
    return (
        <StyledFormRoot {...props}>
            {children}
        </StyledFormRoot>
    )
}

FormRoot.propTypes = {
    children: PropTypes.node,
}

export default FormRoot