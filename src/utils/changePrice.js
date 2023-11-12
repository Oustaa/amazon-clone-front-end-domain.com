import axios from "axios";

export async function getPrice({ from, to, value }, cb) {
  const options = {
    method: "GET",
    url: "https://currency-converter-pro1.p.rapidapi.com/convert",
    params: {
      from: from,
      to: to,
      amount: value,
    },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_X_KEY,
      "X-RapidAPI-Host": "currency-converter-pro1.p.rapidapi.com",
    },
  };

  try {
    if (from === to) {
      cb(value);
    } else {
      const response = await axios.request(options);
      const data = await response.data;
      cb(data.result);
    }
  } catch (error) {
    console.error(error);
  }
}
