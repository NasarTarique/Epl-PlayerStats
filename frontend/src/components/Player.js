import React, { useEffect } from "react";
import { getPlayerDetail } from "./actions/index";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import "./styles/player.css";

function Player({ playerdetail, getPlayerDetail }) {
  let { id } = useParams();
  useEffect(() => {
    getPlayerDetail(id);
  }, []);
  let player = () => {
    if (playerdetail) {
      return (
        <div className="player-stats">
				<h3 className="heading-playername">{playerdetail.name}</h3>
				<div className="player-stats-box">
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
