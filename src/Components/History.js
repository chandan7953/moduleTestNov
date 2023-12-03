import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const History = () => {
  const searchHist = useSelector((state) => state.historyReducer.searchHistory);

  return (
    <div style={{ margin: "10px" }}>
      <h1>Search History</h1>
      <ul>
        {searchHist.map((item, ind) => (
          <li key={ind}>
            <Link to={`/${item}/`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
