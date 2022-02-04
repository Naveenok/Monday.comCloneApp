import React from "react";
import {
  BodyContainer,
  AboutContainer,
  BrandContainer,
  Image,
  ModayDetails,
} from "../styles/Body";
import { Button } from "../styles/NavBar.style";
import mars from "../assets/mars_wrigley.webp";
import nhl from "../assets/nhl.webp";
import universal from "../assets/universal.webp";
import glossier from "../assets/glossier.webp";
import tesla from "../assets/tesla.webp";
import one from "../assets/1.png";
import two from "../assets/2.webp";
import three from "../assets/3.webp";

const Body = () => {
  return (
    <BodyContainer>
      <AboutContainer>
        <div>
          <h1>Take your business to the next level with monday.com</h1>
          <p>Manage all your business's day-to-day activities with ease.</p>
          <Button>show me how &gt;</Button>
        </div>
        <div>
          <video
            src=" https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/remote_mondaycom_static/video/video-library/monday2.0-tests%20dont%20use/Homepage_roulette_bigger_1.mp4"
            width="600"
            height="300"
            loop
            muted
            autoPlay
          ></video>
        </div>
      </AboutContainer>
      <BrandContainer>
        <Image src={mars} alt="mars" imageSize="200px" />
        <Image src={nhl} alt="nhl" imageSize="100px" />
        <Image src={universal} alt="universal" imageSize="150px" />
        <Image src={glossier} alt="glossier" imageSize="100px" />
        <Image src={tesla} alt="tesla" imageSize="50px" />
      </BrandContainer>
      <ModayDetails>
        <div>
          <Image src={one} alt="one" imageSize="400px" />
          <h2>See the bigger picture</h2>
          <p>
            Gain important insights and a clear overview of your budget spend,
            projects status and more.
          </p>
        </div>
        <div>
          <Image src={two} alt="two" imageSize="400px" />
          <h2>See the bigger picture</h2>
          <p>
            Put your repetitive tasks on autopilot and let this Automations
            feature do the work for you.
          </p>
        </div>
        <div>
          <Image src={three} alt="three" imageSize="400px" />
          <h2>See the bigger picture</h2>
          <p>
            Integrate with your favorite tools and centralize your data in one
            place.
          </p>
        </div>
      </ModayDetails>
    </BodyContainer>
  );
};

export default Body;
