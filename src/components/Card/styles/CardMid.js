import styled from "styled-components";

export const StyledCardMid = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: lightgray;
  gap: 10px;
  padding: 15px;
  min-height: 550px;
  max-height: 550px;

  @media (max-width: 800px) {
    min-height: 340px;
    max-height: 340px;
  }
`;
