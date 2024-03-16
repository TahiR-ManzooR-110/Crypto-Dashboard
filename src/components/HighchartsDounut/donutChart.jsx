// import React from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";

// const DonutChart = ({ subscribed, unsubscribed }) => {
//   const options = {
//     chart: {
//       type: "pie",
//     },
//     title: {
//       text: "Subscription Status",
//     },
//     plotOptions: {
//       pie: {
//         innerSize: "50%",
//         dataLabels: {
//           enabled: false,
//         },
//         showInLegend: true,
//       },
//     },
//     series: [
//       {
//         name: "Subscriptions",
//         data: [
//           {
//             name: "Subscribed",
//             y: subscribed,
//             color: "#4CAF50",
//           },
//           {
//             name: "Unsubscribed",
//             y: unsubscribed,
//             color: "#FF5722",
//           },
//         ],
//       },
//     ],
//   };

//   return <HighchartsReact highcharts={Highcharts} options={options} />;
// };

// export default DonutChart;
