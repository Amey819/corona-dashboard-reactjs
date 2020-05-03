import React from "react";
import axios from "axios";

export const Load_data = async () => {
  const config = {
    headers: {
      "x-rapidapi-host": "coronavirus-tracker-india-covid-19.p.rapidapi.com",
      "x-rapidapi-key": "44a1d1a517msh2d3b250811364e7p18a233jsnf1741133c304",
    },
  };

  const res = await axios.get(
    "https://coronavirus-tracker-india-covid-19.p.rapidapi.com/api/getStatewiseSorted",
    config
  );
  console.log(res.data);
  return res.data;
};
