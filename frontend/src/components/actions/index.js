import {CHANGE_NAV} from "./types.js"

export function changeNav(data){
		return {
						type:CHANGE_NAV,
						payload:data
				};
}
