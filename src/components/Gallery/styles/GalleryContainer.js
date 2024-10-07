import styled from "styled-components";

export const StyledGalleryContainer = styled.div`
    display: flex;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    justify-content: end;
    align-items: end;
    width: 300px;
    height: 300px;
`

export const Content = styled.div`
    display: flex;
    opacity: ${(props) => (props.isVisible ? 1 : 0)};
    transition: opacity 0.5s ease;
    align-items: end;
    width: 100%;
    height: 100%;
`;