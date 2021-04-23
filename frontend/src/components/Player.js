import React, { useEffect, useState } from "react";
import { getPlayerDetail } from "./actions/index";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import "./styles/player.css";

function Player({ playerdetail, getPlayerDetail }) {
  let [gwopen, changeGwopen] = useState(false);
  let [prevopen, changePrevopen] = useState(false);
  let [fplopen, changeFplopen] = useState(false);
  let { id } = useParams();
  useEffect(() => {
    getPlayerDetail(id);
  }, []);
  let prevseason = () => {
		  if(playerdetail.prevseasondata)
				  return playerdetail.prevseasondata.map((elem) => {
      return (
			  <div className="prevseason" key={elem.id}>
					  <div className="prevseason-id">
							  <p className="datatag">Season</p>
							  <p className="datavalue">{elem.season}</p>
          </div>
          <div>
            <p className="datatag">Mins Played</p>
            <p className="datavalue">{elem.minplayed}</p>
          </div>
          <div>
            <p className="datatag">Goals</p>
            <p className="datavalue">{elem.goalscored}</p>
          </div>
          <div>
            <p className="datatag">Assist</p>
            <p className="datavalue">{elem.assists}</p>
          </div>
          <div style={{display:playerdetail.position==="Forward"?"none":"block"}}>
				  <p className="datatag" >CS</p>
            <p className="datavalue">{elem.clean_sheet}</p>
          </div>
          <div>
            <p className="datatag">Gconceded</p>
            <p className="datavalue">{elem.goals_conceded}</p>
          </div>
				<div style={{display:playerdetail.position==="Goalkeeper"?"block":"none"}}>
				  <p className="datatag">Saves</p>
				  <p className="datavalue">{elem.saves}</p>
          </div>
				<div style={{display:playerdetail.position==="Goalkeeper"?"block":"none"}}>
						<p className="datatag">Penalties saved</p>
						<p className="datavalue">{elem.penalties_saved}</p>
          </div>
				<div style={{display:elem.yc!=0?"block":"none"}}>
						<p className="datatag">YC</p>
						<p className="datavalue">{elem.yc}</p>
          </div>
				<div style={{display:elem.rc!=0?"block":"none"}}>
						<p className="datatag">RC</p>
						<p className="datavalue">{elem.rc}</p>
          </div>
				<div style={{display:elem.penalties_missed!=0?"block":"none"}}>
						<p className="datatag">Pen missed</p>
						<p className="datavalue">{elem.penalties_missed}</p>
          </div>
				<div style={{display:elem.own_goals!=0?"block":"none"}}>
						<p className="datatag">OG</p>
						<p className="datavalue">{elem.own_goals}</p>
          </div>
          <div>
				  <p className="datatag">FPL pts</p>
				  <p className="datavalue">{elem.pts}</p>
          </div>
          <div>
				  <p className="datatag">Ict index</p>
				  <p className="datavalue">{elem.ictindex}</p>
          </div>
          <div>
				  <p className="datatag">Influence </p>
				  <p className="datavalue">{elem.influence}</p>
          </div>
          <div>
				  <p className="datatag">Creativity </p>
				  <p className="datavalue">{elem.creativity}</p>
          </div>
          <div>
				  <p className="datatag">Threat </p>
				  <p className="datavalue">{elem.threat}</p>
          </div>
        </div>
      );
    });
  };
  let gameweeks = () => {
    if(playerdetail.gameweeks)
    return playerdetail.gameweeks.map((elem) => {
      return (
        <div className="gameweek" key={elem.id}>
				<div className="gameweek-id">
            <p className="datatag">GW</p>
            <p className="datavalue">{elem.gw}</p>
          </div>
          <div>
            <p className="datatag">Mins Played</p>
            <p className="datavalue">{elem.minplayed}</p>
          </div>
          <div>
            <p className="datatag">Goals</p>
            <p className="datavalue">{elem.goalscored}</p>
          </div>
          <div>
            <p className="datatag">Assist</p>
            <p className="datavalue">{elem.assists}</p>
          </div>
          <div style={{display:playerdetail.position==="Forward"?"none":"block"}}>
				  <p className="datatag" >CS</p>
            <p className="datavalue">{elem.clean_sheet}</p>
          </div>
          <div>
            <p className="datatag">Gconceded</p>
            <p className="datavalue">{elem.goals_conceded}</p>
          </div>
				<div style={{display:playerdetail.position==="Goalkeeper"?"block":"none"}}>
				  <p className="datatag">Saves</p>
				  <p className="datavalue">{elem.saves}</p>
          </div>
				<div style={{display:playerdetail.position==="Goalkeeper"?"block":"none"}}>
						<p className="datatag">Penalties saved</p>
						<p className="datavalue">{elem.penalties_saved}</p>
          </div>
				<div style={{display:elem.yc!=0?"block":"none"}}>
						<p className="datatag">YC</p>
						<p className="datavalue">{elem.yc}</p>
          </div>
				<div style={{display:elem.rc!=0?"block":"none"}}>
						<p className="datatag">RC</p>
						<p className="datavalue">{elem.rc}</p>
          </div>
				<div style={{display:elem.penalties_missed!=0?"block":"none"}}>
						<p className="datatag">Pen missed</p>
						<p className="datavalue">{elem.penalties_missed}</p>
          </div>
				<div style={{display:elem.own_goals!=0?"block":"none"}}>
						<p className="datatag">OG</p>
						<p className="datavalue">{elem.own_goals}</p>
          </div>
          <div>
				  <p className="datatag">FPL pts</p>
				  <p className="datavalue">{elem.pts}</p>
          </div>
          <div>
				  <p className="datatag">ict index</p>
				  <p className="datavalue">{elem.ictindex}</p>
          </div>
        </div>
      );
    });
  };
  let player = () => {
    if (playerdetail) {
      return (
        <div className="player-stats">
          <h3 className="heading-playername">{playerdetail.name}</h3>
          <div className="player-stats-box">
            <div className="main-stats">
              <div className="playerimg-container">
                <div className="playerimg">
                  <img src={playerdetail.img_url} alt="" />
                </div>
              </div>
              <div className="player-primary-stats">
                <div className="pstats-box">
                  <div className="pdata3">
                    <p className="datatag">Goals</p>
                    <p className="datavalue">{playerdetail.goals}</p>
                  </div>
                  <div className="pdata4">
                    <p className="datatag">Assists</p>
                    <p className="datavalue">{playerdetail.assists}</p>
                  </div>
                  <div className="pdata5">
                    <p className="datatag">Cleansheet</p>
                    <p className="datavalue">{playerdetail.clean_sheet}</p>
                  </div>
                  <div className="pdata6">
                    <p className="datatag">Saves</p>
                    <p className="datavalue">{playerdetail.saves}</p>
                  </div>
                  <div className="pdata1">
                    <p className="datatag">Team</p>
                    <p className="datavalue">{playerdetail.team}</p>
                  </div>
                  <div className="pdata2">
                    <p className="datatag">Position</p>
                    <p>{playerdetail.position}</p>
                  </div>
                </div>
              </div>
              <div className="player-secondary-stats">
                <div className="sstats-box">
                  <div>
                    <p className="datatag">Total Goals</p>
                    <p className="datavalue">{playerdetail.total_goals}</p>
                  </div>
                  <div>
                    <p className="datatag">Total Assists</p>
                    <p className="datavalue">{playerdetail.total_assists}</p>
                  </div>
                  <div>
                    <p className="datatag">Total Cleansheet</p>
                    <p className="datavalue">{playerdetail.total_cleansheet}</p>
                  </div>
                  <div>
                    <p className="datatag">Y.C</p>
                    <p className="datavalue">{playerdetail.yc}</p>
                  </div>
                  <div>
                    <p className="datatag">R.C</p>
                    <p className="datavalue">{playerdetail.rc}</p>
                  </div>{" "}
                  <div>
                    <p className="datatag">OG</p>
                    <p className="datavalue">{playerdetail.own_goals}</p>
                  </div>
                  <div>
                    <p className="datatag">Mins Played</p>
                    <p className="datavalue">{playerdetail.minsplayed}</p>
                  </div>
                  <div>
                    <p className="datatag">Total Mins Played</p>
                    <p className="datavalue">{playerdetail.total_minsplayed}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="detail-stats">
              <div className="gameweek-container">
                <h2
                  className="gameweek-header"
                  onClick={() => {
                    changeGwopen(!gwopen);
                  }}
                >
                  Gameweeks
                </h2>
                <div
                  className="gameweek-list"
                  style={{ display: gwopen ? "grid" : "none" }}
                >
						{gameweeks()}
                </div>
              </div>
              <div className="prevseason-container">
                <h2
                  className="prevseason-header"
                  onClick={() => {
                    changePrevopen(!prevopen);
                  }}
                >
                  Previous Season
                </h2>
                <div
                  className="prevseason-list"
                  style={{ display: prevopen ? "grid" : "none" }}
                >
						{prevseason()}
                </div>
              </div>
              <div className="fantasy-container">
                <h2
                  className="fantasy-header"
                  onClick={() => {
                    changeFplopen(!fplopen);
                  }}
                >
                  FPL
                </h2>
                <div
                  className="fantasy-list"
                  style={{ display: fplopen ? "grid" : "none" }}
                >
                  <div className="fantasy">
                    <div>
							<p className="datatag">Fpl pts</p>
                      <p className="datavalue">{playerdetail.totalpoints}</p>
                    </div>
                    <div>
							<p className="datatag">Fpl Price</p>
							<p className="datavalue">{playerdetail.price}</p>
                    </div>
                    <div>
							<p className="datatag">Form</p>
                      <p className="datavalue">
							  {playerdetail.form}
                      </p>
                    </div>
                    <div>
							<p className="datatag">Influence</p>
                      <p className="datavalue">
							  {playerdetail.influence}
                      </p>
                    </div>
                    <div>
							<p className="datatag">Creativity</p>
                      <p className="datavalue">
							  {playerdetail.creativity}
                      </p>
                    </div>
                    <div>
							<p className="datatag">Threat</p>
                      <p className="datavalue">
							  {playerdetail.threat}
                      </p>
                    </div>
                    <div>
							<p className="datatag">Ict rank</p>
                      <p className="datavalue">
							  {playerdetail.ictrank}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  return <div className="player-stats-container">{player()}</div>;
}

const mapStateToProps = (state) => {
  return {
    playerdetail: state.stats.playerdetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPlayerDetail: (id) => dispatch(getPlayerDetail(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
