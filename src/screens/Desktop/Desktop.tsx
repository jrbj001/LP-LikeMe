import React from "react";
import { Link } from "react-router-dom";
import { Frame } from "../../components/Frame";
import { LikeMe } from "../../components/LikeMe";
import { SocialIcons } from "../../icons/SocialIcons";
import { SocialIcons1 } from "../../icons/SocialIcons1";
import { SocialIcons2 } from "../../icons/SocialIcons2";
import { SocialIcons5 } from "../../icons/SocialIcons5";
import { SocialIcons7 } from "../../icons/SocialIcons7";
import "./style.css";

export const Desktop = (): JSX.Element => {
  return (
    <div className="desktop" data-model-id="115797:14516">
      <div className="rectangle-5" />

      <div className="group-8">
        <img className="img-2" alt="Img" src="/img/image.svg" />

        <img className="like-me-11" alt="Like me" src="/img/like-me-21.svg" />

        <img className="like-me-12" alt="Like me" src="/img/like-me-22.svg" />

        <img className="img-3" alt="Img" src="/img/1.svg" />

        <img className="img-4" alt="Img" src="/img/2.svg" />
      </div>

      <img className="group-9" alt="Group" src="/img/group-360.png" />

      <div className="text-wrapper-12">Subscribe to learn more!</div>

      <div className="text-wrapper-13">CONTACT</div>

      <div className="text-wrapper-14">STATUS</div>

      <div className="text-wrapper-15">like.me@global.com</div>

      <div className="text-wrapper-16">Health Provider</div>

      <div className="text-wrapper-17">User</div>

      <div className="text-wrapper-18">Company Representative</div>

      <img className="group-10" alt="Group" src="/img/group-361.png" />

      <div className="group-11">
        <div className="rectangle-6" />

        <div className="text-wrapper-19">Sign up</div>
      </div>

      <div className="text-wrapper-20">Sign up for Like:me</div>

      <div className="text-wrapper-21">Quick links</div>

      <div className="text-wrapper-22">Follow us</div>

      <p className="text-wrapper-23">
        Subscribe to the Like.Me newsletter and receive tips, insights, and
        inspirations to care for your body and mind — always in your time, your
        way. Curated by people who care, for people who care.
      </p>

      <p className="privacy-policy">
        <Link to="/privacy">Privacy Policy</Link>
        <br />
        Complaints Policy
        <br />
        <Link to="/terms">Terms &amp; Conditions</Link>
      </p>

      <SocialIcons className="social-icons" />
      <SocialIcons1 className="social-icons-1" />
      <SocialIcons2 className="social-icons-2" />
      <SocialIcons2 className="social-icons-3" />
      <SocialIcons5 className="social-icons-5" />
      <SocialIcons5 className="social-icons-4" />
      <SocialIcons7 className="social-icons-7" />
      <SocialIcons7 className="social-icons-6" />
      <div className="rectangle-7" />

      <div className="rectangle-8" />

      <div className="rectangle-9" />

      <div className="rectangle-10" />

      <img
        className="rectangle-11"
        alt="Rectangle"
        src="/img/rectangle-34624226.png"
      />

      <div className="text-wrapper-24">FIRST NAME</div>

      <div className="text-wrapper-25">LAST NAME</div>

      <div className="text-wrapper-26">E-MAIL *</div>

      <div className="text-wrapper-27">YOUR MESSAGE</div>

      <LikeMe
        className="like-me-instance"
        likeMe="/img/like-me-25.svg"
        property1="default"
      />
      <LikeMe
        className="design-component-instance-node"
        likeMe="/img/like-me-25.svg"
        property1="default"
      />
      <LikeMe
        className="like-me-13"
        likeMe="/img/like-me-25.svg"
        property1="default"
      />
      <div className="rectangle-12" />

      <img
        className="LIKEME-MOCKUP-cel"
        alt="Likeme MOCKUP cel"
        src="/img/likeme-mockup-cel-app-11-1.png"
      />

      <p className="your-well-being-in">
        Your <br />
        Well-being in One App
      </p>

      <p className="text-wrapper-28">
        Like.Me is an integrated well-being platform that transforms your
        personal data into a personalized self-care journey — tailored to your
        goals, needs, and rhythm. It brings together services, health
        professionals, and care providers in one place to make your well-being
        simpler, more connected, and truly human. For companies and specialists,
        Like.Me also offers insights that enhance services and drive better
        outcomes.
      </p>

      <div className="rectangle-13" />

      <img className="googleplay" alt="Googleplay" src="/img/googleplay.png" />

      <div className="rectangle-14" />

      <div className="rectangle-15" />

      <img className="appstore" alt="Appstore" src="/img/appstore.png" />

      <div className="text-wrapper-29">Seu guia do bem-estar</div>

      <Frame
        className="frame-1"
        groupClassName="frame-instance"
        likeMe="/img/like-me-26.svg"
        navigation="/img/navigation-components-2.svg"
        property1="default"
        vector="/img/vector-2.svg"
        vectorClassName="frame-1-instance"
      />
    </div>
  );
};
