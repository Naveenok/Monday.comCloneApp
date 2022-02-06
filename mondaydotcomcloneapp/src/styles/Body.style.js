import styled from "styled-components";

export const BodyContainer = styled.div``;

export const AboutContainer = styled.div`
  padding: 0 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BrandContainer = styled.div`
  height: 150px;
  background-color: #f7f2f2;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Image = styled.img`
  width: ${(props) => (props.imageSize ? props.imageSize : "")};
`;

export const ModayDetails = styled.div`
  display: flex;
  padding: 0 20px;
  gap: 20px;
`;

export const BadgeContainer = styled.div`
  text-align: center;
  padding: 50px 0;
`;

export const ManagingContainer = styled(BadgeContainer)`
  width: 35%;
  margin: auto;
`;

export const ReviewContainer = styled.div`
  width: 410px;
  height: 472px;
  background-color: #dfd9d9;
`;

export const ReviewTag = styled.div`
  background-color: #00ca72;
  height: 10px;
`;

export const ReviewText = styled.div`
  font-size: 25px;
  padding: 32px;
  text-align: center;
  line-height: 36px;
  font-weight: 300;
  height: 250px;
`;

export const ReviewImage = styled.div`
  text-align: center;
  padding: 20px;
`;

export const ReviewedBy = styled.div`
  text-align: center;
  padding: 10px 0;
  line-height: 20px;
`;

export const ReviewSpan = styled.div`
  font-weight: bold;
`;

export const ReviewsContainer = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
