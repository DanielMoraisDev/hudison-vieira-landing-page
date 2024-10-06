import PropTypes from 'prop-types'

import { StyledCardImage } from "./styles/CardImage"

const CardImage = ({image, ...props}) => {
    return (
        <StyledCardImage style={{backgroundImage: `url(${image})`}} {...props}/>
    )
}

CardImage.propTypes = {
    image: PropTypes.node.isRequired
}

export default CardImage