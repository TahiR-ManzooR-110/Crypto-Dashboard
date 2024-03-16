import React, { useEffect, useState } from "react";
import "./cryptoDashboard.css";
import CryptoChart from "../cryptoChart/CryptoChart";
import axios from "axios";
import CryptoDetails from "../cryptoPerformance/CryptoDetails";
import CryptoSentiments from "../cryptoSentiments/CryptoSentiments";
import { useDispatch } from 'react-redux';
import { setCoinData } from "../../redux/coinDataSlice";
import AboutCrypto from "../about/AboutCrypto";
import Tokenomics from "../tokenomics/Tokenomics";
import Team from "../Team/Team";

const apiKey = "CG-NSh22jyTDy2EU9gxhsKaNcUa";
const BaseUrl = "https://api.coingecko.com/api/v3";

export default function CryptoDashboard({ coinName }) {
  const [activeSpan, setActiveSpan] = useState(1);
  const [coinData, setCoinDataState] = useState({}); // Renamed the state setter function
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BaseUrl}/coins/${coinName}`, {
          params: {
            x_cg_demo_api_key: apiKey,
          },
        });
        setCoinDataState(response.data); // Used the renamed state setter function
        dispatch(setCoinData(response.data));

        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching cryptocurrency data:", error);
      }
    };

    fetchData();
  }, [coinName]);

  const handleActiveSpan = (index) => {
    setActiveSpan(index);
  };

  return (
    <div id="dash-main-layout">
      <CryptoChart ></CryptoChart>
      <div id="dashboard-navigator">
        {/* Navigation spans */}
      </div>
      <CryptoDetails ></CryptoDetails>
      <CryptoSentiments></CryptoSentiments>
      <AboutCrypto></AboutCrypto>
      <Tokenomics croudsale={80} foundation={20}></Tokenomics>
      <Team></Team>
    </div>
  );
}
