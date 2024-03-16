import React from "react";
import "./cryptoDetails.css";
import {  useSelector } from 'react-redux';
import { selectCoinData } from "../../redux/coinDataSlice";

export default function CryptoDetails() {
  const coinData = useSelector(selectCoinData);
    
  // const pointerPosition =
  //   ((coinData?.market_data.current_price.usd -
  //     coinData?.market_data.low_24h.usd) /
  //     (coinData?.market_data.high_24h.usd -
  //       coinData?.market_data.low_24h.usd)) *
  //   100;

  if (!coinData || !coinData.market_data) {
    return <div>Loading...</div>;
  }


  return (
    <div id="crypto-Details-layout">
      <div id="crypto-Perfor-layout">
        <span id="perfor-heading">Performance</span>

        <div className="performance-level-color">
          <div className="perfor-labels">
            <span className="label-name-perfor">Todays Low</span>
            <span className="label-price-perfor">
              {coinData?.market_data.low_24h.usd || " "}
              {/* 78,9798 */}
            </span>
          </div>

          <div className="perfor-labels">
            <span className="label-name-perfor">Todays High</span>
            <span className="label-price-perfor">
              {coinData?.market_data.high_24h.usd || " "}
              {/* 78,9798 */}
            </span>
          </div>
          <div className="color-level-performance">
            <div
              id="performance_currentprice_label"
              style={{
                position: "relative",
                textAlign: "center",
                left: "20%",
                padding: "5px",
              }}
            >
              <span>
                <i
                  className="fa-solid fa-caret-up"
                  style={{ display: "block" }}
                ></i>
              </span>
              <span>${coinData?.market_data.current_price.usd}</span>
              {/* <span>$78,9798</span> */}
            </div>
          </div>
        </div>

        <div className="performance-level-color">
          <div className="perfor-labels">
            <span className="label-name-perfor">52W Low</span>
            <span className="label-price-perfor">N/A</span>
          </div>

          <div className="perfor-labels">
            <span className="label-name-perfor">52W High</span>
            <span className="label-price-perfor">N/A</span>
          </div>
          <div className="color-level-performance"></div>
        </div>
      </div>

      <div id="fundamentals-layout"></div>
      <span id="fundamentals-title">
        Fundamentals
        <i className="fa-solid fa-circle-info  info-icon"></i>
      </span>

      <div id="fundamentals-grid-container">
        <div className="grid-item-fundamental">
          <div className="item-grid-details">
            <span className="grid-item-name">
              {coinData?.name || "coin Price"} Price
            </span>
            <span className="grid-item-value">
              ${coinData?.market_data?.current_price?.usd || ""}
            </span>
          </div>
        </div>
        <div className="grid-item-fundamental">
          <div className="item-grid-details">
            <span className="grid-item-name">Market Cap</span>
            <span className="grid-item-value">
              {coinData?.market_data?.market_cap?.usd || "N/A"}
            </span>
          </div>
        </div>
        <div className="grid-item-fundamental">
          <div className="item-grid-details">
            <span className="grid-item-name">24h Low / 24h High</span>
            <span className="grid-item-value">
              ${coinData?.market_data.low_24h.usd || ""} / $
              {coinData?.market_data.high_24h.usd || "N/A"}
            </span>
          </div>
        </div>
        <div className="grid-item-fundamental">
          <div className="item-grid-details">
            <span className="grid-item-name">Market Cap Dominance</span>
            <span className="grid-item-value">NA</span>
          </div>
        </div>
        <div className="grid-item-fundamental">
          <div className="item-grid-details">
            <span className="grid-item-name">7d Low / 7d High</span>
            <span className="grid-item-value">$79,7890 / $89,89930</span>
          </div>
        </div>
        <div className="grid-item-fundamental">
          <div className="item-grid-details">
            <span className="grid-item-name">Volume / Market Cap</span>
            <span className="grid-item-value">
              {(
                coinData?.market_data.total_volume.usd /
                coinData?.market_data?.market_cap?.usd
              ).toFixed(4)}
            </span>
          </div>
        </div>
        <div className="grid-item-fundamental">
          <div className="item-grid-details">
            <span className="grid-item-name">Trading Volume</span>
            <span className="grid-item-value">
              ${coinData?.market_data.total_volume.usd || "N/A"}
            </span>
          </div>
        </div>
        <div className="grid-item-fundamental">
          <div className="item-grid-details">
            <span className="grid-item-name">All Time High</span>
            <span className="grid-item-value">N/A</span>
          </div>
        </div>
        <div className="grid-item-fundamental">
          <div className="item-grid-details">
            <span className="grid-item-name">Market Cap Rank</span>
            <span className="grid-item-value">
              #{coinData?.market_cap_rank}
            </span>
          </div>
        </div>
        <div className="grid-item-fundamental">
          <div className="item-grid-details">
            <span className="grid-item-name">All Time Low</span>
            <span className="grid-item-value">$67</span>
          </div>
        </div>
      </div>
    </div>
  );
}
