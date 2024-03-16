import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./trending.css";

export default function Trending({ trendingTitle, coins }) {
  const style = {
    priceUp: { backgroundColor: "#EBF9F4", color: "green" },
    priceDown: { backgroundColor: "#f4e5e1", color: "red" },
  };
  const CustomNextArrow = ({ onClick }) => (
    <div className="custom-arrow-next-ftt" onClick={onClick}>
      <i className="fa-solid fa-angle-right"></i>
    </div>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <div className="custom-arrow-prev-ftt" onClick={onClick}>
      <i className="fa-solid fa-angle-left"></i>
    </div>
  );

  const renderCoinItem = (coin, index) => (
    <div key={index} id="card-container-trending">
      <div className="trending-crousal-item">
        <div className="coin-top-crousel">
          <img
            src={coin.item.thumb}
            alt=""
            style={{
              width: "1.3rem",
              height: "1.3rem",
              objectFit: "cover",
            }}
          />
          <span id="coin-symbol-sparkline">{coin?.item.symbol}</span>{" "}
          <span
            id="coin-24-performence-trend"
            style={
              coin?.item.data.price_change_percentage_24h.usd > 0
                ? style.priceUp
                : style.priceDown
            }
          >
            {Math.round(
              coin?.item.data.price_change_percentage_24h.usd
            ).toFixed(2)}
          </span>
        </div>
        <div id="coin-price-trend-crousel">{coin.item.data.price}</div>
        <div id="coin-spark-line">
          <img
            src={coin?.item.data.sparkline}
            alt="spark-line"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="trending-layout">
      <div id="crousel-outer-item-wrapper">
        <span id="trendingtitle">{trendingTitle}</span>
        <div id="trending-Crousel-container">
          <Slider {...settings} className="trending-crousel">
            {coins?.map((coin, index) => renderCoinItem(coin, index))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
