import React from "react";
import {
  ReviewTag,
  ReviewContainer,
  ReviewText,
  ReviewImage,
  ReviewedBy,
  ReviewSpan,
} from "../styles/Body.style";
import star from "../assets/star.webp";

const Review = ({ review }) => {
  return (
    <ReviewContainer>
      <ReviewTag></ReviewTag>
      <ReviewText>{review.review}</ReviewText>
      <ReviewImage>
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
      </ReviewImage>
      <ReviewedBy>
        <ReviewSpan>{review.reviewBy}</ReviewSpan>
      </ReviewedBy>
    </ReviewContainer>
  );
};

export default Review;
