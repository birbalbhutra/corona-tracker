import React from "react";
// import { fetchDailyData } from "../../api";
import { Bar } from "react-chartjs-2";

// Uncomment below line to use the line chart
// import { Line, Bar } from "react-chartjs-2";

import styles from "./Chart.module.css";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  // For daily data
  // const [dailyData, setDailyData] = useState([]);

  // useEffect(() => {
  //   const fetchAPI = async () => {
  //     setDailyData(await fetchDailyData());
  //   };
  //   fetchAPI();
  // }, []);

  // Model for linechart
  // const lineChart = dailyData.length ? (
  //   <Line
  //     data={{
  //       labels: dailyData.map(({ date }) => date),
  //       datasets: [
  //         {
  //           data: dailyData.map(({ confirmed }) => confirmed),
  //           label: "Infected",
  //           borderColor: "#3333ff",
  //           fill: true,
  //         },
  //         {
  //           data: dailyData.map(({ deaths }) => deaths),
  //           label: "Deaths",
  //           borderColor: "#red",
  //           backgroundColor: "rgba(255, 0, 0, 0.5)",
  //           fill: true,
  //         },
  //       ],
  //     }}
  //   />
  // ) : null;

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 99, 212, 0.5)",
              "rgba(20, 223, 20, 0.5)",
              "rgba(255, 9, 9, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: {
          display: true,
          text:
            `${country}` !== ""
              ? `Current cases in ${country}`
              : `Current cases worldwide`,
        },
      }}
    />
  ) : null;

  return <div className={styles.container}>{barChart}</div>;
};

export default Chart;
