import styled from "styled-components";

export const StyledContainerAlternative = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 100%;

    @media (max-width: 800px) {
        padding: 15px;
        flex-direction: column;
    }

`