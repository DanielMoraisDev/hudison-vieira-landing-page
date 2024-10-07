import PropTypes from 'prop-types'

import { StyledGalleryRoot } from './styles/GalleryRoot'

const GalleryRoot = ({ children, ...props }) => {
    return (
        <StyledGalleryRoot {...props}>
            {children}
        </StyledGalleryRoot>
    )
}

GalleryRoot.propTypes = {
    children: PropTypes.node,
}

export default GalleryRoot