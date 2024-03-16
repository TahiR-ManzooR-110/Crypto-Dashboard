import React, { useState, useEffect } from "react";
import "./cryptosentiments.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CryptoSentiments() {
  const [buyPer, setBuyPer] = useState(55);
  const [sellPer, setSellPer] = useState(35);
  const [holdPer, setHoldPer] = useState(15);
  const [slidesToShow, setSlidesToShow] = useState(2); // Default value for slidesToShow

  const CustomNextArrow = ({ onClick }) => (
    <div className="custom-arrow-next" onClick={onClick}>
      <i class="fa-solid fa-angle-right right-angle-slider"></i>
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
  };

  useEffect(() => {
    // Function to update slidesToShow based on screen width
    const updateSlidesToShow = () => {
      if (window.innerWidth <= 850) {
        setSlidesToShow(1); // Show only one slide on mobile (screen width <= 850px)
      } else {
        setSlidesToShow(2); // Show two slides on larger screens
      }
    };

    // Initial call to set slidesToShow based on the current screen width
    updateSlidesToShow();

    // Event listener to update slidesToShow when the screen is resized
    window.addEventListener("resize", updateSlidesToShow);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const style = {
    buyEstimate: { width: `${buyPer * 2}%`, backgroundColor: "#12E193" },
    sellEstimate: { width: `${sellPer * 2}%`, backgroundColor: "#F75D59" },
    holdEstimate: { width: `${holdPer * 2}%`, backgroundColor: "#8A9D96" },
  };
  const style2 = {
    buyEstimate: { width: `${buyPer / 2}%`, backgroundColor: "#12E193" },
    sellEstimate: { width: `${sellPer / 2}%`, backgroundColor: "#F75D59" },
    holdEstimate: { width: `${holdPer / 2}%`, backgroundColor: "#8A9D96" },
  };

  return (
    <div id="sentiment-layout-crypto">
      <span id="sentiment-title"> Sentiment</span>

      <div id="sentiment-slider-layout">
        <span className="label-sentiment">
          Key Events <i className="fa-solid fa-circle-info  info-icon"></i>
        </span>

        <Slider {...settings} className="slider-event">
          <div>
            <div className="slider-item-sentiments">
              <div className="event-name-in">
                <i
                  className="fa-solid fa-book event-icons"
                  style={{ backgroundColor: "lightgreen" }}
                ></i>

                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia nisi et facere sapiente dolorum? Iste, corrupti. Id
                quos quisquam voluptates. Illum minus in possimus quos molestiae
                autem magni placeat magnam?
              </p>
            </div>
          </div>
          <div>
            <div className="slider-item-sentiments">
              <div className="event-name-in">
                <i
                  className="fa-solid fa-bullseye  event-icons"
                  style={{ backgroundColor: "blue" }}
                ></i>
                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia nisi et facere sapiente dolorum? Iste, corrupti. Id
                quos quisquam voluptates. Illum minus in possimus quos molestiae
                autem magni placeat magnam?
              </p>
            </div>
          </div>
        </Slider>
      </div>

      <div id="analyst-estimates-layout">
        <span id="analyst-title">
          Analyst Estimates
          <i className="fa-solid fa-circle-info  info-icon"></i>
        </span>

        <div id="estimate-container">
          <div id="percent-estimate-big">
            <span>{buyPer}</span>
            <i class="fa-thin fa-percent"></i>
          </div>
          <div id="estimate-color-level">
            <div className="estimate-color-line">
              <div>
                <span className="estimate-label">Buy</span>
              </div>
              <div
                className="estimate-color-width"
                style={
                  window.innerWidth <= 850
                    ? style2.buyEstimate
                    : style.buyEstimate
                }
              ></div>
              <span className="estimate-label-per">
                {buyPer}
                <i class="fa-thin fa-percent"></i>
              </span>
            </div>
            <div className="estimate-color-line">
              <div>
                <span className="estimate-label">Hold</span>
              </div>{" "}
              <div
                className="estimate-color-width"
                style={
                  window.innerWidth <= 850
                    ? style2.holdEstimate
                    : style.holdEstimate
                }
              ></div>
              <span className="estimate-label-per">
                {holdPer}
                <i class="fa-thin fa-percent"></i>
              </span>
            </div>
            <div className="estimate-color-line">
              <div>
                <span className="estimate-label">sell</span>
              </div>
              <div
                className="estimate-color-width"
                style={
                  window.innerWidth <= 850
                    ? style2.sellEstimate
                    : style.sellEstimate
                }
              ></div>
              <span className="estimate-label-per">
                {sellPer}
                <i class="fa-thin fa-percent"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
