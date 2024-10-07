import styled from "styled-components";

export const StyledHeroRoot = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
    min-height: 350px;
    max-height: 350px;

    @media (max-width: 800px) {
        padding: 15px;
    }
`
