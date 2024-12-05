// src/components/SportSelector.js
import React from "react";

const SportSelector = ({ setSport }) => {
  const handleSportChange = (e) => {
    setSport(e.target.value);
  };

  return (
    <div className="sport-selector">
      <label htmlFor="sport">Choose a sport:</label>
      <select id="sport" onChange={handleSportChange}>
        <option value="baseball_mlb">Baseball - MLB</option>
        <option value="basketball_nba">Basketball - NBA</option>
        <option value="americanfootball_nfl">American Football - NFL</option>
        <option value="tennis_atp">Tennis - ATP</option>
        <option value="soccer_epl">Soccer - EPL</option>
      </select>
    </div>
  );
};

export default SportSelector;
