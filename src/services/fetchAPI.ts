import axios from 'axios';

const KEY = '33e4754fdbmsh30d7133f027b664p1265fejsn7dad399a438f';
const URL = 'https://currencyscoop.p.rapidapi.com/latest/';

const getCurrAPI = async () => {
  try {
    const resp = await axios.get(URL, {
      headers: {
        'X-RapidAPI-Key': KEY,
        'X-RapidAPI-Host': 'currencyscoop.p.rapidapi.com',
      },
    });
    return resp.data.response.rates;
  } catch (error) {
    console.error(error);
    return error;
  }
};
export default getCurrAPI;
