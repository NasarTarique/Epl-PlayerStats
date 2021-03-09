import {CHANGE_NAV} from "../actions/types.js"

const initialState = {
		navopen:window.matchMedia("(min-width:1300px)").matches,
}

export default function(state=initialState,action){
		switch(action.type){
				case CHANGE_NAV:
						return {
								...state,
								navopen:action.payload
						}
				default:
						return{
								...state,
								navopen:window.matchMedia("(min-width:1300px)").matches
						}
		}

}
