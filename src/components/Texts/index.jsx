import PropTypes from "prop-types"

import { StyledBigText as BigText } from './styles/BigText.js'
import { StyledHeading as Heading } from './styles/Heading.js'
import { StyledParagraph as Paragraph } from './styles/Paragraph.js'
import { StyledSmallText as SmallText } from './styles/SmallText.js'
import { StyledSubtitle as Subtitle } from './styles/Subtitle.js'

const Text = ({ children }) => children

Text.BigText = ({ children, ...props }) => <BigText {...props}>{children}</BigText>
Text.BigText.displayName = 'Text.BigText'
Text.Heading = ({ children, ...props }) => <Heading {...props}>{children}</Heading>
Text.Heading.displayName = 'Text.Heading'
Text.Subtitle = ({ children, ...props }) => <Subtitle {...props}>{children}</Subtitle>
Text.Subtitle.displayName = 'Text.Subtitle'
Text.Paragraph = ({ children, ...props }) => <Paragraph {...props}>{children}</Paragraph>
Text.Paragraph.displayName = 'Text.Paragraph'
Text.SmallText = ({ children, ...props }) => <SmallText {...props}>{children}</SmallText>
Text.SmallText.displayName = 'Text.SmallText'

Text.BigText.propTypes = { children: PropTypes.node }
Text.Heading.propTypes = { children: PropTypes.node }
Text.Subtitle.propTypes = { children: PropTypes.node }
Text.Paragraph.propTypes = { children: PropTypes.node }
Text.SmallText.propTypes = { children: PropTypes.node }

export default Text