import PropTypes from 'prop-types'

import { StyledInputContent } from "./styles/InputContent"

const InputContent = ({ children, type, ...props }) => {
    return (
        type == "select" ?
            <StyledInputContent as="select" {...props}>
                {children}
            </StyledInputContent>
            :
            <StyledInputContent type="text" {...props}/>
    )
}

InputContent.propTypes = {
    children: PropTypes.node,
    type: PropTypes.string,
}


export default InputContent
