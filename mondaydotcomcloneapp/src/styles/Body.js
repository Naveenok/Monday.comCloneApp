import styled from "styled-components";

export const BodyContainer = styled.div``;
export const AboutContainer = styled.div`
  padding: 60px;
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
