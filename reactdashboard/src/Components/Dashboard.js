import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Load_data } from "../Actions/Load_data";
import { connect } from "react";

const Dashboard = () => {
  // grab the data
  // to a state
  // and then send it as a prop to the other component
  // const [response, setresponse] = useState([]);

  const [data, setData] = useState([]);

  async function fetchData() {
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
    setData(res.data);
    console.log(typeof data);
    console.log(data);
  }

  useEffect(() => {
    fetchData();
  });
  return (
    <Fragment>
      <div className="Search">
        <input type="text" placeholder="Search"></input>
      </div>
      <div className="overall">
        <div className="confirmed">
          <h2> Confirmed</h2>
          <p>[+400]</p>
          <h3>31,400</h3>
          <div id="chart_div" style={{ width: "120px", height: "50px" }}></div>
        </div>
        <div className="active">
          <h2> Active</h2>
          <p>[+0]</p>
          <h3>22,828</h3>
          <div
            id="chart_div_2"
            style={{ width: "120px", height: "50px" }}
          ></div>
        </div>
        <div className="recov">
          <h2> Recovered</h2>
          <p>[+172]</p>
          <h3>7919</h3>
          <div
            id="chart_div_3"
            style={{ width: "120px", height: "50px" }}
          ></div>
        </div>
        <div className="deaths">
          <h2> Deaths</h2>
          <p>[+5]</p>
          <h3>1013</h3>
          <div
            id="chart_div_4"
            style={{ width: "120px", height: "50px" }}
          ></div>
        </div>
      </div>
      <div className="stats">
        <div className="back">States</div>
        <div className="back">Confirmed</div>
        <div className="back">Active</div>
        <div className="back">Recovered</div>
        <div className="back">Deaths</div>
      </div>

      {data.map((dt) => (
        <div className="all">
          <div className="table">{dt.name}</div>
          <div className="table">{dt.cases}</div>
          <div className="table">{dt.cases > 0 && dt.cases - dt.recovered}</div>
          <div className="table">{dt.recovered}</div>
          <div className="table">{dt.deaths}</div>
        </div>
      ))}
    </Fragment>
  );
};
// put all in 1 now
// create a action with getdata  from api
// create a reducer
export default Dashboard;
