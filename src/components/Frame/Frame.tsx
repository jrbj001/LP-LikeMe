/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Airplay } from "../../icons/Airplay";
import { Navigation } from "../Navigation";
import "./style.css";

interface Props {
  property1: "variant-2" | "default";
  className: any;
  groupClassName: any;
  likeMe: string;
  vectorClassName: any;
  vector: string;
  navigation: string;
}

export const Frame = ({
  property1,
  className,
  groupClassName,
  likeMe = "/img/like-me-11.svg",
  vectorClassName,
  vector = "/img/vector-3.svg",
  navigation = "/img/navigation-components.svg",
}: Props): JSX.Element => {
  return (
    <div className={`frame property-1-${property1} ${className}`}>
      {property1 === "default" && (
        <>
          <img
            className="few-people-working-a"
            alt="Few people working a"
            src="/img/few-people-working-a-coworking-space-ar-169-profile-nmy2u-4d.png"
          />

          <div className="rectangle" />

          <div className="text-wrapper">Like your Community</div>

          <div className={`div ${groupClassName}`} />

          <div className="group-2">
            <img className="like-me-2" alt="Like me" src={likeMe} />

            <div className="navigation-2">
              <div className="global-wrapper">
                <div className="global-2">
                  <img
                    className={`vector ${vectorClassName}`}
                    alt="Vector"
                    src={vector}
                  />

                  <div className="vector-2" />

                  <img
                    className="vector-3"
                    alt="Vector"
                    src="/img/vector.svg"
                  />

                  <div className="vector-4" />
                </div>
              </div>
            </div>

            <div className="text-wrapper-2">Communities</div>
          </div>

          <p className="this-is-a-space-to">
            This is a space to connect with people who, just like you, are
            exploring their own ways to live and feel well. <br />
            Listen with openness and be inspired by real voices, everyday
            learnings, and the gentle power of walking your path — together, yet
            in your own way.
          </p>

          <img
            className="few-people-working-a-2"
            alt="Few people working a"
            src="/img/few-people-working-a-coworking-space-ar-169-profile-nmy2u-4d-1.png"
          />

          <img className="navigation-3" alt="Navigation" src={navigation} />
        </>
      )}

      {property1 === "variant-2" && (
        <div className="group-wrapper-2">
          <div className="group-3">
            <div className="group-4">
              <div className="rectangle-2" />

              <p className="p">Do seu jeito, no seu tempo sempre.</p>

              <p className="text-wrapper-3">
                Like:me nasceu pra mudar isso. Pra reunir o que importa, do
                jeito que funciona pra você. Com soluções confiáveis, escolhidas
                a dedo pra acompanhar cada passo. Aqui, ninguém impõe, a gente
                escuta.
              </p>

              <div className="group-5">
                <img
                  className="group-6"
                  alt="Group"
                  src="/img/group-10229.png"
                />

                <img
                  className="woman-years-old"
                  alt="Woman years old"
                  src="/img/woman-45-years-old-meditating-in-a-living-room-ar-169-pro-dc-1.png"
                />

                <div className="navigation-4" />

                <img
                  className="like-me-3"
                  alt="Like me"
                  src="/img/like-me-13.svg"
                />

                <div className="navigation-wrapper">
                  <Navigation
                    className="navigation-components"
                    icon={<Airplay className="airplay-1" color="#0154F8" />}
                    mode="light"
                    sizes="large"
                    state="selected"
                    type="activity"
                  />
                </div>

                <div className="text-wrapper-4">Activities</div>

                <Airplay className="airplay-instance" color="#FDFBEE" />
              </div>
            </div>

            <div className="rectangle-3" />

            <div className="text-wrapper-5">Your Moments in Motion</div>

            <p className="well-being-starts">
              Well-being starts with small, intentional actions.
              <br />
              Here, you’ll find activities inspired by professional protocols -
              translated into easy, adaptable practices you can follow your way.
              It’s not about doing more - it’s about doing what makes sense for
              you now.
            </p>

            <div className="group-7" />

            <img
              className="woman-years-old-2"
              alt="Woman years old"
              src="/img/woman-45-years-old-meditating-in-a-living-room-ar-169-pro-dc-1.png"
            />

            <div className="navigation-5" />

            <img
              className="like-me-4"
              alt="Like me"
              src="/img/like-me-16.svg"
            />

            <img
              className="navigation-6"
              alt="Navigation"
              src="/img/navigation-components-1.svg"
            />

            <div className="text-wrapper-6">Activities</div>

            <div className="flashlight-wrapper">
              <div className="flashlight">
                <img
                  className="vector-5"
                  alt="Vector"
                  src="/img/vector-116.svg"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Frame.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  likeMe: PropTypes.string,
  vector: PropTypes.string,
  navigation: PropTypes.string,
};
