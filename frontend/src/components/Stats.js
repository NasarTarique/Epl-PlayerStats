import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { getPlayers } from "./actions/index";
import "./styles/stats.css";

function Stats(props) {
  const [page, changePage] = useState(1);

  useEffect(() => {
    props.getPlayers(page);
  }, [page]);

  let history = useHistory();
  const handlePlayerclick = (e, data) => {
    history.push(`/stats/${data}`);
  };
  const pagebuttons = () => {
    let arr = [];
    if (!(JSON.stringify(props.players) === JSON.stringify({}))) {
      const totalpages = Math.ceil(props.players.count / 30);
      if (totalpages < 7) {
        for (let i = 1; i <= totalpages; i++)
          arr.push(
            <span
              key={i}
              onClick={() => {
                changePage(i);
              }}
              style={{ background: page === i ? "#ff3939" : "#1c192d" }}
            >
              {i}
            </span>
          );
        return arr;
      } else {
          arr.push(
            <span
					key="1"
              onClick={() => {
                changePage(i);
              }}
					style={{ background: page === 1 ? "#ff3939" : "#1c192d" }}
            >
					1 
            </span>
          );
			  if (!(page === 1 || page === totalpages)){
          arr.push(
            <span
					key={page}
              onClick={() => {
                changePage(i);
              }}
					style={{ background:"#ff3939"}}
            >
					{page}
            </span>
          );
						
			  }
          arr.push(
            <span
					key={totalpages}
              onClick={() => {
                changePage(i);
              }}
					style={{ background: page === totalpages  ? "#ff3939" : "#1c192d" }}
            >
					{totalpages}
            </span>
          );
      }
    }
  };
  const playerrow = () => {
    if (!(JSON.stringify(props.players) == JSON.stringify({}))) {
      return props.players.results.map((player) => {
        const pos1 = () => {
          if (
            player.position === "Defender" ||
            player.position === "Goalkeeper"
          ) {
            return (
              <div className="player-data1">
                <p className="datatag">CleanSheet</p>
                <p className="datavalue">{player.clean_sheet}</p>
              </div>
            );
          } else
            return (
              <div className="player-data1">
                <p className="datatag">Goals</p>
                <p className="datavalue">{player.goals}</p>
              </div>
            );
        };
        const pos2 = () => {
          if (player.position === "Defender") {
            return (
              <div className="player-data">
                <p className="datatag">G/A</p>
                <p className="datavalue">{player.assists + player.goals}</p>
              </div>
            );
          } else if (player.position === "Goalkeeper") {
            return (
              <div className="player-data">
                <p className="datatag">saves</p>
                <p className="datavalue">{player.saves}</p>
              </div>
            );
          } else
            return (
              <div className="player-data">
                <p className="datatag">Assists</p>
                <p className="datavalue">{player.assists}</p>
              </div>
            );
        };
        return (
          <div
            className="player"
            key={player.id}
            onClick={(e) => handlePlayerclick(e, player.id)}
          >
            <div className="player-thumbnail">
              <img src={player.img_url} alt="" />
            </div>
            <div className="player-name">
              <p className="datatag">Name</p>
              <p className="datavalue">{player.name}</p>
            </div>
            <div className="player-team">
              <p className="datatag">Team</p>
              <p className="datavalue">{player.team}</p>
            </div>
            <div className="player-pos">
              <p className="datatag">Pos</p>
              <p className="datavalue">{player.position}</p>
            </div>
            {pos1()}
            {pos2()}
          </div>
        );
      });
    }
  };
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
        <div className="players-list">{playerrow()}</div>
      </div>
      <div className="pagination">
        <div
          className="left-page"
          onClick={() => {
            if (page > 1) {
              changePage(page - 1);
            }
          }}
        ></div>
        <div className="page-button">{pagebuttons()}</div>
        <div
          className="right-page"
          onClick={() => {
            if (Math.ceil(props.players.count / 30) > page) {
              changePage(page + 1);
            }
          }}
        ></div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    players: state.stats.players,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPlayers: (page) => dispatch(getPlayers(page)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Stats);
