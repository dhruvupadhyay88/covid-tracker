import React, { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import styles from "./CountryInfo.module.css";
import { fetchCountries } from "../api";

const CountryInfo = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const getAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    getAPI();
  }, [setFetchedCountries]);

  return (
    <Container className={styles.Container}>
      <Form>
        <Form.Control
          as="select"
          default="World-wide"
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="">World-wide</option>
          {fetchedCountries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </Form.Control>
      </Form>
    </Container>
  );
};

export default CountryInfo;
