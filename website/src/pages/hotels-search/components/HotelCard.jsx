import React from 'react';
import styled from 'styled-components';
import { AM_TITLE_BLUE, AM_ORANGE, ICONS, STARS_ORANGE, MOBILE_MAX_WIDTH } from '../../../layout/GlobalStyles';
import Icon from '../../../assets/icons/Icons';

const HotelCardElement = styled.div`
  height: 220px;
  background-color: #FFF;
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12);
  padding: 10px;
  
  @media (max-width: ${MOBILE_MAX_WIDTH}px) {
    flex-direction: column;
    height: auto;
  }
`;

const Image = styled.div`
  width: 37%;
  height: 100%;
  background-size: cover;
  background-position: center;

  @media (max-width: ${MOBILE_MAX_WIDTH}px) {
    width: 100%;
    height: 57vw;
  }
`;

const Description = styled.div`
  width: 35%;
  border-right: dashed 1px #5454542E;
  padding-left: 15px;
  
  @media (max-width: ${MOBILE_MAX_WIDTH}px) {
    width: 100%;
    border-right: none;
    padding: 10px 0 20px;
    border-bottom: dashed 1px #5454542E;
  }
`;

const Name = styled.div`
  font-family: sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: ${AM_TITLE_BLUE};
`;

const PricingContainer = styled.div`
  padding: 26px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;

  @media (max-width: ${MOBILE_MAX_WIDTH}px) {
    padding: 25px 0;
  }
`;

const PricePerNight = styled.div`
  color: #454848;
  font-size: 14px;

`;

const Price = styled.div`
  color: ${AM_ORANGE};
  font-size: 35px;
  font-weight: bold;
  span {
    font-weight: normal;
    font-size: 24px
    vertical-align: middle;
  }

  @media (max-width: ${MOBILE_MAX_WIDTH}px) {
    font-size: 32px;
  }
`;

const Button = styled.button`
  height: 43px;
  width: 100%;
  font-size: 20px;

  @media (max-width: ${MOBILE_MAX_WIDTH}px) {
    margin: 10px 0
  }
`;

const Stars = styled.div`
  margin: 10px 0;
  img {
    width: 15px;
    height: 15px;
    margin-right: 10px;
  }
  @media (max-width: ${MOBILE_MAX_WIDTH}px) {
    margin: 10px 0 0;
  }
`;

const Amenities = styled.div`
  img {
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }
`;

/**
 * @description HotelCard component
 */
const HotelCard = ({ id, name, stars, price, image, amenities }) => {
  const starIcons = [...Array(stars)].map((element, index) => <Icon key={index} icon={ICONS.STAR} color={STARS_ORANGE} />);
  const amenitiesIcons = amenities.map((amenity, index) => <img key={index} src={require(`../../../assets/icons/amenities/${amenity}.svg`)} alt="amenities" />);

  return (
    <HotelCardElement>
      <Image style={{ backgroundImage: 'url(' + require(`../../../assets/images/hotels/${image}`) + ')' }} />
      <Description>
        <Name>{name}</Name>
        <Stars>{starIcons}</Stars>
        <Amenities>{amenitiesIcons}</Amenities>
      </Description>
      <PricingContainer>
        <PricePerNight>Precio por noche por habitación</PricePerNight>
        <Price><span>ARS</span> {price}</Price>
        <Button className="almundoButton">Ver Hotel</Button>
      </PricingContainer>
    </HotelCardElement>
  );
};

export default HotelCard;
