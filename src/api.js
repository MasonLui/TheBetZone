// src/api.js
import axios from "axios";

const API_KEY = "027357098f78a6e51c35dd1570b1ecbd"; // Replace with your API key
const BASE_URL = "https://api.the-odds-api.com/v4/sports/";

export const fetchOdds = async (sport, region) => {
  try {
    const response = await axios.get(`${BASE_URL}${sport}/odds`, {
      params: {
        apiKey: API_KEY,
        regions: region,
        markets: "h2h,spreads,totals", // Include 'totals' market type
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching odds:", error);
    return [];
  }
};
