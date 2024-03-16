import "./cryptoChart.css";
import TradingViewWidget from "../TradingViewWidget";
import { useState, memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import {  useSelector } from 'react-redux';
import {selectCoinData} from '../../redux/coinDataSlice'

function CryptoChart() {
  const data = useSelector(selectCoinData);
  
  const coinDetails = {
    imgurl: data?.image?.large || "",
    coinName: data?.name || "",
    symbol: data?.symbol || "",
    coinRank: data?.market_data?.market_cap_rank || "",
    coinUsdPrice: data?.market_data?.current_price?.usd || "",
    coinInrPrice: data?.market_data?.current_price?.inr || "",
    coinPriceChange_24: data?.market_data?.price_change_percentage_24h || 0,
  };

  const [coinSymbol, setCoinSymbol] = useState("btc");
  const { bitcoin = "bitcoin" } = useParams();
  const coinName = bitcoin.slice(1);
  const changeSymbol = () => {
    setCoinSymbol(coinDetails.symbol);
    // console.log(coinDetails.symbol, "in use efft");
  };
  // const path=usePram()

  useEffect(() => {
    changeSymbol();
  }, [coinName]);

  const style = {
    priceUp: { backgroundColor: "#EBF9F4", color: "green" },
    priceDown: { backgroundColor: "#f4e5e1", color: "red" },
  };

  return (
    <div id="crypto-chart-layout">
      <div className="coin-details-elements">
        <img src={coinDetails.imgurl} alt="Bitcoin" id="coin-logo" />
        <span id="coin-name">{coinDetails.coinName}</span>
        <span id="coin-Symbol">{coinDetails.symbol}</span>
        <span id="coin-rank">Rank #{coinDetails.coinRank}</span>
      </div>
      <div id="coin-details">
        <div>
          <div className="coin-details-elements" id="coin-price-d">
            <span id="coin-price-usd">${coinDetails.coinUsdPrice}</span>
            <span
              id="coin-price-performance"
              style={
                coinDetails.coinPriceChange_24 >= 0
                  ? style.priceUp
                  : style.priceDown
              }
            >
              {coinDetails.coinPriceChange_24 > 0 ? (
                <i className="fa-solid fa-caret-up"></i>
              ) : (
                <i className="fa-solid fa-caret-down"></i>
              )}
              {Math.abs(coinDetails.coinPriceChange_24).toFixed(2)}%{" "}
            </span>
            <span id="coin-24-status">(24H)</span>
            <span id="coin-price-inr">&#8377;{coinDetails.coinInrPrice}</span>
          </div>
        </div>
        <div id="coin-chart-price">
          <div id="chart-title-price">
            <div>
              <span id="chart-name-title-coin">
                {coinDetails.coinName} Price Chart(USD)
              </span>
            </div>
          </div>
          <div id="chart">
            <TradingViewWidget symbol={coinDetails?.symbol} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(CryptoChart);
