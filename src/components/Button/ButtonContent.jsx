import PropTypes from 'prop-types'

import { StyledButton } from './styles/ButtonContent'

const ButtonContent = ({ isAnimated, children, ...props}) => {
    return (
        <>
            <StyledButton isAnimated={isAnimated} {...props}>
                {children}
            </StyledButton>
        </>
    )
}

ButtonContent.propTypes = {
    isAnimated: PropTypes.bool,
    children: PropTypes.node,
}

export default ButtonContent