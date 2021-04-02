import {GET_PLAYERS, GET_PLAYER_DETAIL, FILTER_PLAYERS} from "../actions/types.js"

const initialState = {
		players:{},
		playerdetail:{},
}

export default function(state=initialState,action){
		switch(action.type){
				case GET_PLAYERS:
						return {
								...state,
								players:action.payload,
						}
				case GET_PLAYER_DETAIL:
						return {
								...state,
								playerdetail:action.payload,
						}
				case FILTER_PLAYERS:
						return {
								...state,
								players:action.payload,
						}
				default:
						return state
		}

}
