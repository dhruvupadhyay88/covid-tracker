import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let newUrl = url;

  if (country) {
    newUrl = url + "/countries/" + country;
  } else {
    newUrl = url;
  }

  try {
    const { data } = await axios.get(newUrl);
    const response = {
      confirmed: data.confirmed,
      recovered: data.recovered,
      deaths: data.deaths,
      lastUpdate: data.lastUpdate,
    };

    return response;
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(url + "/daily");
    const newData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return newData;
  } catch (error) {}
};

export const fetchCountries = async () => {
  try {
    const { data } = await axios.get(`${url}/countries`);

    return data.countries.map((country) => country.name);
  } catch (error) {}
};
