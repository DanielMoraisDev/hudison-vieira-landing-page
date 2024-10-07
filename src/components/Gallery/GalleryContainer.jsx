import PropTypes from 'prop-types'
import { useState } from 'react'

import { StyledGalleryContainer, Content } from './styles/GalleryContainer'

const GalleryContainer = ({ backgroundImage, children, ...props }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <StyledGalleryContainer onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{ backgroundImage: `url(${backgroundImage})` }} {...props}>
            <Content isVisible={isHovered}>
                {children}
            </Content>
        </StyledGalleryContainer>
    )
}

GalleryContainer.propTypes = {
    children: PropTypes.node,
    backgroundImage: PropTypes.string.isRequired
}

export default GalleryContainer