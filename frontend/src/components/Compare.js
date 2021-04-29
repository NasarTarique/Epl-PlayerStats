import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getPlayers, filterPlayers } from "./actions/index";
import "./styles/compare.css";

function Compare(props) {
  const [pickplayer, changePickplayer] = useState(false); const [player1, changePlayer1] = useState({});
  const [player2, changePlayer2] = useState({});
  const [player, changePlayer] = useState(1);
  const [filters, changeFilter] = useState({
    name: "",
    pos: "Any Position",
    team: "All Teams",
  });
  const [teams, changeTeam] = useState([]);
  const [page, changePage] = useState(1);
  const [filterOn, switchFilter] = useState(false);

  useEffect(() => {
    fetch("/api/teams")
      .then((res) => res.json())
      .then((data) => {
        changeTeam(data.teams);
      });
  }, []);
  const teamlist = () => {
    return teams.map((team) => {
      return (
        <option key={team} value={team}>
          {" "}
          {team}
        </option>
      );
    });
  };
  // pages
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
        if (!(page === 1 || page === totalpages)) {
          arr.push(
            <span
              key={page}
              onClick={() => {
                changePage(i);
              }}
              style={{ background: "#ff3939" }}
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
            style={{ background: page === totalpages ? "#ff3939" : "#1c192d" }}
          >
            {totalpages}
          </span>
        );
      }
    }
  };
  useEffect(() => {
    if (filterOn) {
      props.filterPlayers(filters.pos, filters.team, filters.name, page);
    } else props.getPlayers(page);
  }, [page]);
  // Player list
  const handlePlayerclick = (e, id) => {
    fetch(`/api/players/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (player === 1) {
          changePlayer1(data);
        } else changePlayer2(data);
      });
    changePickplayer(!pickplayer);
  };
  const playerrow = () => {
    if (!(JSON.stringify(props.players) == JSON.stringify({}))) {
      return props.players.results.map((player) => {
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
          </div>
        );
      });
    }
  };
  const player1name = () => {
    if (JSON.stringify(player1) === JSON.stringify({}))
      return <h4> Player One </h4>;
    return <h4> {player1.name}</h4>;
  };
  const player2name = () => {
    if (JSON.stringify(player2) === JSON.stringify({}))
      return <h4>Player Two</h4>;
    return <h4> {player2.name}</h4>;
  };
  return (
    <div className="compare-container">
      <div className="compare">
        <h1>Compare Players</h1>
      </div>
      <div className="player-picker">
        <div className="player1-pick">
          {player1name()}
          <p
            className="pick-btn"
            onClick={() => {
              changePickplayer(!pickplayer);
              changePlayer(1);
            }}
          >
            Pick
          </p>
        </div>
        <div className="player2-pick">
          {player2name()}
          <p
            className="pick-btn"
            onClick={() => {
              changePickplayer(!pickplayer);
              changePlayer(2);
            }}
          >
            Pick
          </p>
        </div>
      </div>
      <div
        className="compare-grid"
        style={{
          display:
            JSON.stringify(player1) === JSON.stringify({}) &&
            JSON.stringify(player2) === JSON.stringify({})
              ? "none"
              : "grid",
        }}
      >
        <div className="img-container">
          <img src={player1.img_url} alt="" />
        </div>
        <div className="img-container">
          <img src={player2.img_url} alt="" />
        </div>
        <div className="compare-goals">
          <h3
            style={{
              color: player1.goals >= player2.goals ? "#43942d" : "#ff3939",
            }}
          >
            Goals <span>{player1.goals}</span>
          </h3>
        </div>
        <div className="compare-goals">
          <h3
            style={{
              color: player2.goals >= player1.goals ? "#43942d" : "#ff3939",
            }}
          >
            Goals <span>{player2.goals}</span>
          </h3>
        </div>
        <div className="compare-assists">
          <h3
            style={{
					color: player1.assists >= player2.assists ? "#43942d" : "#ff3939",
            }}
          >
				  Assists <span>{player1.assists}</span>
          </h3>
        </div>
			  <div className="compare-assists">
          <h3
            style={{
					color: player2.assists >= player1.assists ? "#43942d" : "#ff3939",
            }}
          >
				  Assists	 <span>{player2.assists}</span>
          </h3>
        </div>
			  <div className="compare-cleansheet">
          <h3
            style={{
					color: player1.cleansheet >= player2.assists ? "#43942d" : "#ff3939",
            }}
          >
				  Assists <span>{player1.assists}</span>
          </h3>
        </div>
			  <div className="compare-assists">
          <h3
            style={{
					color: player2.assists >= player1.assists ? "#43942d" : "#ff3939",
            }}
          >
				  Assists	 <span>{player2.assists}</span>
          </h3>
        </div>
      </div>
      <div
        className="playerpick-list-container"
        style={{ display: pickplayer ? "grid" : "none" }}
      >
        <div
          className="playerpick-close"
          onClick={() => changePickplayer(!pickplayer)}
        >
          <i className="fas fa-times"></i>
        </div>
        <div className="filter-playerpick">
          <div className="pos-filter">
            <select
              id="pos-select"
              name="position"
              value={filters.pos}
              onChange={(e) =>
                changeFilter({ ...filters, pos: e.target.value })
              }
            >
              <option value="Any Position">Any Position</option>
              <option value="Forward">Forward</option>
              <option value="Defender">Defender</option>
              <option value="Midfielder">Midfielder</option>
            </select>
          </div>
          <div className="team-filter">
            <select
              id="team-select"
              name="team"
              value={filters.team}
              onChange={(e) =>
                changeFilter({ ...filters, team: e.target.value })
              }
            >
              <option value="All Teams">All Teams</option>
              {teamlist()}
            </select>
          </div>
          <div className="name-filter">
            <input
              placeholder="Name"
              type="text"
              value={filters.name}
              onChange={(e) => {
                changeFilter({ ...filters, name: e.target.value });
              }}
            ></input>
          </div>
          <div className="filter-button">
            <p
              onClick={() => {
                changePage(1);
                if (
                  filters.pos === "Any Position" &&
                  filters.team === "All Teams" &&
                  filters.name === ""
                ) {
                  switchFilter(false);
                  props.getPlayers(page);
                } else {
                  switchFilter(true);
                  props.filterPlayers(
                    filters.pos,
                    filters.team,
                    filters.name,
                    page
                  );
                }
              }}
            >
              Filter
            </p>
          </div>
        </div>
        <div className="playerpick-list">{playerrow()}</div>
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
    filterPlayers: (pos, team, name, page) =>
      dispatch(filterPlayers(pos, team, name, page)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Compare);
