import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
let size;
let fontsz;
export default function DonutChart({ croudFund, foundationFund }) {
  const [size, setSize] = useState("250");
  const [fontsz, setFontsz] = useState("14px");
  const [spacing, setspacing] = useState([0, 0, 0, -30]);
  const [x, setX] = useState(42);

  useEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth <= 768 ? "200" : "250");
      setFontsz(window.innerWidth <= 768 ? "12px" : "14px");
      setspacing(window.innerWidth <= 768 ? [0, 0, 0, -20] : [0, 0, 0, -30]);
      setX(34);
    };

    window.addEventListener("resize", updateSize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []); // Empty dependency array means this effect will only run once after the initial render
  const options = {
    chart: {
      type: "pie",
      height: size,
      spacing: spacing,
    },
    title: {
      text: "Initial Distribution",
      verticalAlign: "top",
      align: "middle",
      y: 25,
      x: x,
    },
    plotOptions: {
      pie: {
        innerSize: "65%",
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    legend: {
      layout: "vertical",

      align: "right",
      verticalAlign: "middle",
      itemStyle: {
        fontSize: fontsz,
      },

      labelFormat: "{name}: {percentage:.f}%",
    },
    credits: {
      enabled: false, // Disable Highcharts link
    },

    series: [
      {
        name: "Disributions",
        data: [
          {
            name: "Croud Sale Investors",
            y: croudFund,
            color: "#0000FF",
          },
          {
            name: "Foundation",
            y: foundationFund,
            color: "#FFA500",
          },
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
