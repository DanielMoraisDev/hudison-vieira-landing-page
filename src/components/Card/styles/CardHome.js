import styled from "styled-components";

export const StyledCardHome = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: lightgray;
  gap: 10px;
  padding: 15px;
  min-height: 650px;
  max-height: 650px;

  @media (max-width: 800px) {
    min-height: 600px;
    max-height: 600px;
  }
`;
