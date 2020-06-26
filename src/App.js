import React from "react";
import styles from "./App.module.css";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryInfo from "./components/CountryInfo/CountryInfo";

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <CountryInfo />
        <Chart />
      </div>
    );
  }
}

export default App;
