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
  display: flex;
  flex-direction: column;
  max-width: 41rem;
  height: 47.2rem;
  background-color: #f5ecec;
`;

export const ReviewTag = styled.div`
  background-color: #00ca72;
  height: 1rem;
`;

export const ReviewText = styled.div`
  font-size: 2.5rem;
  padding: 3.2rem;
  text-align: center;
  line-height: 3.6rem;
  font-weight: 300;
  height: 25rem;
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const ReviewImage = styled.div`
  text-align: center;
  padding: 2rem;
`;

export const ReviewedBy = styled.div`
  font-size: 1.6rem;
  text-align: center;
  padding: 1rem 0;
  line-height: 2rem;
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const ReviewSpan = styled.div`
  font-weight: bold;
`;

export const ReviewsContainer = styled.div`
  padding: 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;
