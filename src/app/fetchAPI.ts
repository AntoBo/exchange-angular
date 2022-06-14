import axios from 'axios';

const KEY = '33e4754fdbmsh30d7133f027b664p1265fejsn7dad399a438f';
const URL = 'https://currencyscoop.p.rapidapi.com/latest/';

export const getCurrAPI = async () => {
  try {
    const response = await axios.get(URL, {
      headers: {
        'X-RapidAPI-Key': KEY,
        'X-RapidAPI-Host': 'currencyscoop.p.rapidapi.com',
      },
    });
    console.log('API responsed: ', response);
  } catch (error) {
    console.error(error);
  }
};
