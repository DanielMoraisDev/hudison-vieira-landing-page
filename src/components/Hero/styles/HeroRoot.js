import styled from "styled-components";

export const StyledHeroRoot = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 10px;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`
