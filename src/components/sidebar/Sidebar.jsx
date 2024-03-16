import React from "react";
import "./sidebar.css";
import bannerImg from "../../util/bannerAd.png";
// import coinImg from "../../util/Bitcoin.svg.png";
export default function Sidebar({ coins }) {
  const top3 = coins && coins.length > 0 ? coins.slice(0, 4) : [];
  const style = {
    priceUp: { backgroundColor: "#EBF9F4", color: "green" },
    priceDown: { backgroundColor: "#f4e5e1", color: "red" },
  };

  const mappedData = top3.map((coin) => {
    const { name, symbol, data, thumb } = coin.item;
    const priceChangePercentage24h = data.price_change_percentage_24h;

    return {
      name,
      symbol,
      priceChangePercentage24h,
      thumb,
    };
  });
  // console.log(mappedData, "jjj");

  // console.log(top3);
  return (
    <div id='sidebar-layout'>
      <div id='koinx-banner'>
        <div id='banner-top'>
          <span id='koinx-banner-title'>
            Get Started with Koinx <br></br> for Free
          </span>
          <p>
            with our range of features that you can equip for
            <br /> free, KoinX you to be more educated <br /> and aware of tax
            reports
          </p>
        </div>
        <div id='bannaer-img'>
          <img
            src={bannerImg}
            alt=''
          />
        </div>

        <div id="button-div-bann">
          <button id='banner-button'>
            Get Started for Free <i class='fa-solid fa-arrow-right'></i>
          </button>
        </div>
      </div>

      <div id='trending-3-coins-sidebar'>
        <div id='trending-3-top-title'>
          <span>Trending Coins (24h)</span>
        </div>
        {mappedData.map((coin, index) => (
           <div
            key={index}
            id='trending-top3-coins-show'>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}>
              <div id='image-layout-top3-coins'>
                {" "}
                <img
                  src={coin.thumb}
                  alt=''
                />
              </div>
              <span id='coin-name-top3'>
                {" "}
                {coin.name}({coin.symbol})
              </span>
            </div>
            <span
              id='top3-coin-perf-24'
              style={
                coin.priceChangePercentage24h.usd > 0
                  ? style.priceUp
                  : style.priceDown
              }>
              {" "}
              {coin.priceChangePercentage24h.usd >= 0 ? (
                <i className='fa-solid fa-caret-up'></i>
              ) : (
                <i className='fa-solid fa-caret-down'></i>
              )}{" "}
              {`${Math.abs(coin.priceChangePercentage24h.usd).toFixed(2)}%`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
