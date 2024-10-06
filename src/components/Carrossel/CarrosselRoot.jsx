import "./styles/reactSlick.css"

import PropTypes from 'prop-types';
import Slider from "react-slick";

const CarrosselRoot = ({ children }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 724,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
  };

  return (
      <Slider {...settings}>
        {children}
      </Slider>
  );
};

CarrosselRoot.propTypes = {
  children: PropTypes.node,
};

export default CarrosselRoot;
