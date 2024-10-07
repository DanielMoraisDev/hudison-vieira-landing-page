import PropTypes from 'prop-types'

import { StyledGalleryContent } from './styles/GalleryContent'

const GalleryContent = ({ children, ...props }) => {
    return (
        <StyledGalleryContent {...props}>
            {children}
        </StyledGalleryContent>
    )
}

GalleryContent.propTypes = {
    children: PropTypes.node,
}

export default GalleryContent