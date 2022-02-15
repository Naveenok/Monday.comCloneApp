import styled from "styled-components";

export const BodyContainer = styled.div``;

export const AboutContainer = styled.div`
  padding: 0 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const VideoContainer = styled.video`
  max-width: 100%;
  max-height: 570px;
  padding: 2rem;
`;

export const BrandContainer = styled.div`
  min-height: 15rem;
  max-width: 100%;
  background-color: #f7f2f2;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
export const ModayDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModayDetails = styled.div`
  display: flex;
  padding: 0 2rem;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const MondayDetailsData = styled.div`
  width: 80%;
  padding: 0 5rem;
  line-height: 3rem;
  font-size: 1.6rem;
`;

export const BadgeContainer = styled.div`
  text-align: center;
  padding: 5rem 0;
`;

export const ManagingContainer = styled(BadgeContainer)`
  line-height: 3rem;
  font-size: 1.6rem;
  width: 50%;
  margin: auto;
`;

export const ReviewContainer = styled.div`
  width: 410px;
  height: 472px;
  background-color: #f5ecec;
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
