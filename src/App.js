import React from "react";
import styles from "./App.module.css";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryInfo from "./components/CountryInfo/CountryInfo";
import { fetchData } from "./components/api";
import { Col, Row, Container } from "react-bootstrap";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
      country: "",
    };
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <Container className={styles.container}>
        <Row className={styles.titleRow}>
          <h1 className={styles.title}>COVID-19 TRACKER</h1>
        </Row>
        <Row className={styles.parentRow}>
          <Col>
            <Cards data={data} />
          </Col>
          <Col className={styles.chartCol}>
            <Row>
              <CountryInfo handleCountryChange={this.handleCountryChange} />
            </Row>
            <Row>
              <Chart data={data} country={country} />
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
