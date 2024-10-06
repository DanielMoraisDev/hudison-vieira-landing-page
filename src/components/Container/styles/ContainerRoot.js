import styled from "styled-components";

export const StyledContainerRoot = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-left: 40px;
    padding-right: 40px;
    gap: 15px;
    width: 100%;
    height: 860px;

    @media (min-width: 1224px) { 
        padding-left: 80px !important;
        padding-right: 80px !important;
    }

    @media (min-width: 1110px) { 
        padding-left: 120px !important;
        padding-right: 120px !important;
    }

    @media (min-width: 1220px) { 
        padding-left: 160px !important;
        padding-right: 160px !important;
    }

    @media (min-width: 1330px) { 
        padding-left: 200px !important;
        padding-right: 200px !important;
    }

    @media (min-width: 1440px) { 
        padding-left: 240px !important;
        padding-right: 240px !important;
    }

    @media (min-width: 1660px) { 
        padding-left: 280px !important;
        padding-right: 280px !important;
    }


`