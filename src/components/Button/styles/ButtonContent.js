import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
    padding: 10px;
    text-align: center;
    ${({ isAnimated }) => isAnimated && css`
        
    `}
`
