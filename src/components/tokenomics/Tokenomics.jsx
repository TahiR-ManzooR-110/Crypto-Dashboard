import React from "react";
import DonutChart from "../donutChart/DonutChart";
import "./tokenomics.css";

export default function Tokenomics({ croudsale, foundation }) {
  return (
    <div id="tokenomics-layout">
      <span id="tokenomics-title">Tokenomics</span>
      <div id="tokenomics-container">
        <DonutChart foundationFund={20} croudFund={80}></DonutChart>
      </div>
      <div id="tokenomics-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          tempora, sapiente et ipsam sit quia delectus ut illo aspernatur eius
          porro temporibus. Dicta soluta minima blanditiis illo vel autem quos!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo saepe
          nesciunt dolore quisquam, dolorum reiciendis, nostrum provident
          voluptates possimus consequatur nobis officiis consequuntur vitae
          voluptate ut laboriosam debitis totam numquam. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Asperiores doloremque fugit quas
          eius illum vero. Nihil veritatis saepe optio corporis! Quis blanditiis
          voluptatibus deleniti distinctio debitis fugiat sapiente quod enim?
        </p>
      </div>
    </div>
  );
}
