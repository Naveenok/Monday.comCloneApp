import React from "react";
import {
  BodyContainer,
  AboutContainer,
  BrandContainer,
  Image,
  ModayDetails,
  BadgeContainer,
  ManagingContainer,
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
import badges from "../assets/badges.webp";
import star from "../assets/star.webp";

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
            width="729"
            height="514"
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
      <BadgeContainer>
        <div>
          <Image src={badges} alt="badges" imageSize="1309px" />
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
      <h1>Why teams love monday.com</h1>
      <div>
        <div>
          "monday.com is a great software to have all projects organized for all
          types of business. It's completely customizable and allows for
          multiple users to update status of assignments."
        </div>
        <div></div>
        <div>
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
        </div>
        <div>
          <span>
            Derek Lopez., Business owner at DLC Electrical Services LLC
          </span>
          | Reviewed on Capterra
        </div>
      </div>
    </BodyContainer>
  );
};

export default Body;
