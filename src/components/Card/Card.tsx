import { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styled from "styled-components";
import { formatPrice, formatDate } from './utils';
import { ICard } from './../../types/card';
import { BLACK_COLOR } from './../../variables';

const Card = (props: ICard) => {
  const [isImageLoaded, setImageLoaded] = useState<boolean>(false);

  const { image, title, location, date, duration, price } = props;

  return (
    <CardBlock>
      {!isImageLoaded && (
        <SkeletonTheme color="#dadada" highlightColor="#dadada">
          <Skeleton style={{ height: "170px" }}></Skeleton>
        </SkeletonTheme>
      )}
      <Image
        isLoaded={isImageLoaded}
        onLoad={() => setImageLoaded(true)}
        src={"https://rsttur.ru/" + image.md}
      />
      <Description>
        <Title>{title}</Title>
        <Location>{location}</Location>
        <Date>
          {date.date} {duration && formatDate(duration)}
        </Date>
        {price && <Price>{formatPrice(price.price)}₽</Price>}
      </Description>
    </CardBlock>
  );
};

const CardBlock = styled.div`
  display: flex;
  flex-direction: column;

  width: 340px;
  color: ${BLACK_COLOR};
`;

const Image = styled.img<{ isLoaded: boolean }>`
  width: 100%;
  height: ${props => props.isLoaded ? "170px" : "0px"};
  border-radius: 5px 5px 0px 0px;
  object-fit: cover;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px 20px 20px;

  border: 1px solid #dadce0;
  border-top: 0px;
  border-radius: 0px 0px 5px 5px;
  flex-grow: 1;
`;

const Title = styled.p`
  font-family: "Inter-ExtraBold";
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
`;

const Location = styled.p`
  font-family: "Inter-Medium";
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  margin-top: 5px;
`;

const Date = styled.p`
  font-family: "Inter-Medium";
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  margin-top: 5px;
`;

const Price = styled.h3`
  margin: 0px;
  margin-top: 15px;
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  font-family: "Inter-ExtraBold";
  font-size: 18px;
  line-height: 18px;
`;

export default Card;
