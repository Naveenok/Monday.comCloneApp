import React from "react";
import {
  BodyContainer,
  AboutContainer,
  VideoContainer,
  BrandContainer,
  Image,
  ModayDetails,
  MondayDetailsData,
  ModayDetailsContainer,
  BadgeContainer,
  ManagingContainer,
  ReviewsContainer,
} from "../styles/Body.style";
import { Button } from "../styles/NavBar.style";
import mars from "../assets/mars_wrigley.webp";
import nhl from "../assets/nhl.webp";
import universal from "../assets/universal.webp";
import glossier from "../assets/glossier.webp";
import tesla from "../assets/tesla.webp";
import one from "../assets/1.png";
import two from "../assets/2.webp";
import three from "../assets/3.webp";
import badges from "../assets/badges.webp";
import Review from "./Review";

const ReviewData = [
  {
    review:
      "monday.com is a great software to have all projects organized for all types of business. It's completely customizable and allows for multiple users to update status of assignments.",
    reviewBy:
      "Derek Lopez., Business owner at DLC Electrical Services LLC | Reviewed on Capterra",
  },
  {
    review:
      "״monday.com is interactive, and visually striking. It works very well for the mapping of business processes, and to track the costs of each stage of the project in question.",
    reviewBy: "Jonas F., Salesperson at Tiendeo | Reviewed on G2 Crowd",
  },
];

const Body = () => {
  return (
    <BodyContainer>
      <AboutContainer>
        <div>
          <h1 style={{ fontSize: "2.2rem" }}>
            Take your business to the next level with monday.com
          </h1>
          <p style={{ fontSize: "1.5rem", lineHeight: "3rem" }}>
            Manage all your business's day-to-day activities with ease.
          </p>
          <Button>show me how &gt;</Button>
        </div>
        <div>
          <VideoContainer
            src=" https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/remote_mondaycom_static/video/video-library/monday2.0-tests%20dont%20use/Homepage_roulette_bigger_1.mp4"
            loop
            muted
            autoPlay
          ></VideoContainer>
        </div>
      </AboutContainer>
      <BrandContainer>
        <div>
          <Image src={mars} alt="mars" />
        </div>
        <div>
          <Image src={nhl} alt="nhl" />
        </div>
        <div>
          <Image src={universal} alt="universal" />
        </div>
        <div>
          <Image src={glossier} alt="glossier" />
        </div>
        <div>
          <Image src={tesla} alt="tesla" />
        </div>
      </BrandContainer>
      <ModayDetailsContainer>
        <ModayDetails>
          <div
            style={{ fontSize: "1.5rem", height: "54.6rem", maxWidth: "40rem" }}
          >
            <div>
              <Image src={one} alt="one" />
            </div>
            <MondayDetailsData>
              <h2>See the bigger picture</h2>
              <p>
                Gain important insights and a clear overview of your budget
                spend, projects status and more.
              </p>
            </MondayDetailsData>
          </div>
          <div
            style={{ fontSize: "1.5rem", height: "54.6rem", maxWidth: "40rem" }}
          >
            <div>
              <Image src={two} alt="two" />
            </div>
            <MondayDetailsData>
              <h2>See the bigger picture</h2>
              <p>
                Put your repetitive tasks on autopilot and let this Automations
                feature do the work for you.
              </p>
            </MondayDetailsData>
          </div>
          <div
            style={{ fontSize: "1.5rem", height: "54.6rem", maxWidth: "40rem" }}
          >
            <div>
              <Image src={three} alt="three" />
            </div>
            <MondayDetailsData>
              <h2>See the bigger picture</h2>
              <p>
                Integrate with your favorite tools and centralize your data in
                one place.
              </p>
            </MondayDetailsData>
          </div>
        </ModayDetails>
      </ModayDetailsContainer>
      <BadgeContainer>
        <div>
          <Image src={badges} alt="badges" />
        </div>
        <ManagingContainer>
          <h1>Managing can be easier with monday.com</h1>
          <p>
            Even the best managers have a hard time keeping up with their team's
            tasks. Let monday.com help you stay on top of your tasks.
          </p>
          <Button>Show me how &gt;</Button>
        </ManagingContainer>
      </BadgeContainer>
      {/*   <h1 style={{ textAlign: "center" }}>Why teams love monday.com</h1>
      <ReviewsContainer>
        {ReviewData.map((review, index) => (
          <Review id={index} review={review} />
        ))}
      </ReviewsContainer> */}
    </BodyContainer>
  );
};

export default Body;
