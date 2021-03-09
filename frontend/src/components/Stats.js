import React from "react";
import "./styles/stats.css";

function Stats() {
  return (
    <div className="stats-container">
      <div className="stats">
        <h1>Stats</h1>
        <div className="filter-container">
          <div className="pos-filter">
            <select id="pos-select" name="position">
              <option value="Any Position">Any Position</option>
              <option value="Forward">Forward</option>
              <option value="Defender">Defender</option>
              <option value="Midfielder">Midfielder</option>
            </select>
          </div>
          <div className="team-filter">
            <select id="team-select" name="team">
              <option value="all teams">All Teams</option>
              <option value="Arsenal">Arsenal</option>
              <option value="Aston Villa">Aston Villa</option>
            </select>
          </div>
        </div>
        <div className="players-list">
          <div className="player">
            <div className="player-thumbnail">
              <img src="/static/frontend/player1.jpg" alt="" />
            </div>
            <div className="player-name">
              <p className="datatag">Name</p>
              <p className="datavalue">Bruno Fernandes</p>
            </div>
            <div className="player-team">
              <p className="datatag">Team</p>
              <p className="datavalue">Man Utd</p>
            </div>
            <div className="player-data1">
              <p className="datatag">Goals</p>
              <p className="datavalue">16</p>
            </div>
            <div className="player-data">
              <p className="datatag">Assists</p>
              <p className="datavalue">13</p>
            </div>
          </div>

          <div className="player">
            <div className="player-thumbnail">
              <img src="/static/frontend/player1.jpg" alt="" />
            </div>
            <div className="player-name">
              <p className="datatag">Name</p>
              <p className="datavalue">Bruno Fernandes</p>
            </div>
            <div className="player-team">
              <p className="datatag">Team</p>
              <p className="datavalue">Man Utd</p>
            </div>
            <div className="player-data1">
              <p className="datatag">Goals</p>
              <p className="datavalue">16</p>
            </div>
            <div className="player-data">
              <p className="datatag">Assists</p>
              <p className="datavalue">13</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
