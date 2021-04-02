import {
  CHANGE_NAV,
  GET_PLAYERS,
  FILTER_PLAYERS,
  GET_PLAYER_DETAIL,
} from "./types.js";

export function changeNav(data) {
  return {
    type: CHANGE_NAV,
    payload: data,
  };
}

export function getPlayers(page) {
  return (dispatch) => {
    return fetch(`/api/players/?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_PLAYERS,
          payload: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function filterPlayers(pos, team, page) {
  const requestjson = {
    method: "POST",
    body: JSON.stringify({
      pos: pos,
      team: team,
      page:page,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  return (dispatch) => {
		  return fetch("/api/filter/", requestjson)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: FILTER_PLAYERS,
          payload: data,
        });
      });
  };
}

export function getPlayerDetail(id) {
  return (dispatch) => {
    return fetch(`/api/players/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("getPlayerDetail");
        console.log(data);
        dispatch({
          type: GET_PLAYER_DETAIL,
          payload: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
