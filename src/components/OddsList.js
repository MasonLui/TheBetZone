// src/components/OddsList.js
import React, { useState, useEffect } from "react";
import { fetchOdds } from "../api"; // Adjust the import path as necessary

const OddsList = ({ sport }) => {
  const [odds, setOdds] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadOdds = async () => {
      try {
        const data = await fetchOdds(sport, "us");
        console.log("Fetched odds data:", data); // Log the data to verify
        setOdds(data || []);
      } catch (err) {
        console.error("Error fetching odds:", err);
        setError("Failed to fetch odds. Please try again later.");
      }
    };
    loadOdds();
  }, [sport]);

  if (error) {
    return <div className="odds-list">{error}</div>;
  }

  return (
    <div className="odds-list">
      {Array.isArray(odds) && odds.length === 0 ? (
        <p>No odds available.</p>
      ) : (
        odds.map((match) => (
          <div key={match.id} className="odds-card">
            <h2>
              {match.home_team} vs {match.away_team}
            </h2>
            {/* Display bookmakers and their markets */}
            {match.bookmakers.map((bookmaker) => (
              <div key={bookmaker.key}>
                <h3>{bookmaker.title}</h3>

                {/* Display head-to-head odds */}
                <div>
                  <h4>Head-to-Head (Moneyline):</h4>
                  {bookmaker.markets
                    .find((market) => market.key === "h2h")
                    ?.outcomes.map((outcome) => (
                      <p key={outcome.name}>
                        {outcome.name}: {outcome.price}
                      </p>
                    ))}
                </div>

                {/* Display spreads */}
                <div>
                  <h4>Spreads:</h4>
                  {bookmaker.markets
                    .find((market) => market.key === "spreads")
                    ?.outcomes.map((outcome) => (
                      <p key={outcome.name}>
                        {outcome.name}: {outcome.point} (Odds: {outcome.price})
                      </p>
                    ))}
                </div>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default OddsList;
