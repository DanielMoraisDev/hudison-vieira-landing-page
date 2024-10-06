import PropTypes from 'prop-types'

import { StyledHeroRoot } from './styles/HeroRoot'

const HeroRoot = ({ children, ...props }) => {
    return (
        <StyledHeroRoot {...props}>
            {children}
        </StyledHeroRoot>
    )
}

HeroRoot.propTypes = {
    children: PropTypes.node,
}

export default HeroRoot