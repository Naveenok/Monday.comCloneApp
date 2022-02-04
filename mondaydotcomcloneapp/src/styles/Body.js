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
