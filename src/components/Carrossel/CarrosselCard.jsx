import PropTypes from "prop-types";

import { StyledCarrosselCard } from "./styles/CarrosselCard.js";
import { StyledCarrosselCardContainer } from "./styles/CarrosselCardContainer.js";

const CarrosselCard = ({ children, ...props }) => {
  return (
    <StyledCarrosselCardContainer>
      <StyledCarrosselCard {...props}>{children}</StyledCarrosselCard>
    </StyledCarrosselCardContainer>
  );
};

CarrosselCard.propTypes = {
  children: PropTypes.node,
};

export default CarrosselCard;
