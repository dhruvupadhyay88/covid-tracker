import React from "react";
import styles from "./Cards.module.css";
import { Card, Row, Container } from "react-bootstrap";
import CountUp from "react-countup";

const Cards = ({ data }) => {
  return (
    <Container className={styles.container}>
      <Row>
        <Card
          border="primary"
          style={{ width: "18rem" }}
          className={styles.box}
        >
          <Card.Header className={styles.header}>INFECTED</Card.Header>
          <Card.Body>
            <Card.Title>
              {data.confirmed ? (
                <CountUp
                  start={0}
                  end={data.confirmed.value}
                  duration={2}
                  separator=","
                />
              ) : (
                <h6>Loading...</h6>
              )}
            </Card.Title>
            <Card.Text>
              <h6 className={styles.dateText}>
                {new Date(data.lastUpdate).toDateString()}
              </h6>
              Total number of infected cases of COVID-19
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Card
          border="success"
          style={{ width: "18rem" }}
          className={styles.box}
        >
          <Card.Header className={styles.header}>RECOVERED</Card.Header>
          <Card.Body>
            <Card.Title>
              {data.recovered ? (
                <CountUp
                  start={0}
                  end={data.recovered.value}
                  duration={2}
                  separator=","
                />
              ) : (
                <h6>Loading...</h6>
              )}
            </Card.Title>
            <Card.Text>
              <h6 className={styles.dateText}>
                {new Date(data.lastUpdate).toDateString()}
              </h6>
              Total number of recovered COVID-19 cases
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Card border="danger" style={{ width: "18rem" }} className={styles.box}>
          <Card.Header className={styles.header}>DEATHS</Card.Header>
          <Card.Body>
            <Card.Title>
              {data.deaths ? (
                <CountUp
                  start={0}
                  end={data.deaths.value}
                  duration={2}
                  separator=","
                />
              ) : (
                <h6>Loading...</h6>
              )}
            </Card.Title>
            <Card.Text>
              <h6 className={styles.dateText}>
                {new Date(data.lastUpdate).toDateString()}
              </h6>
              Total number of deaths caused by COVID-19
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default Cards;
