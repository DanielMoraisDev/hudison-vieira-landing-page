import { styled } from "styled-components";

import { widthIcon } from "./NavbarIcon";

const translateYWidth = widthIcon + 20

export const StyledNavbarListDropdown = styled.ul`
  position: absolute;
  right: 0;
  border: 1px solid #ccc;
  padding: 10px;
  display: flex;
  flex-direction: column;
  transform: translateY(${translateYWidth}px);
  z-index: 1000;
`;
