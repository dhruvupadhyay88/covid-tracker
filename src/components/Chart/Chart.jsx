import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";
import Container from "react-bootstrap/Container";

const Chart = ({ data, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const getAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    getAPI();
  }, []);

  const barChart = data.confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: ["blue", "green", "red"],
            data: [
              data.confirmed.value,
              data.recovered.value,
              data.deaths.value,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  const lineChart =
    dailyData.length !== 0 ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [
            {
              data: dailyData.map((data) => data.confirmed),
              label: "Infected",
              borderColor: "#1C4DD3",

              fill: true,
            },
            {
              data: dailyData.map((data) => data.deaths),
              label: "Deaths",
              borderColor: "#EE1C13",
              backgroundColor: "#EE9934",
              fill: true,
            },
          ],
        }}
      />
    ) : null;

  return (
    <Container className={styles.container}>
      {country ? barChart : lineChart}
    </Container>
  );
};

export default Chart;
