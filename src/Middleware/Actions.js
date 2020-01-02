import axios from "axios";
export const DisplaySong = name => {
	return {
		type: "DISPLAY_SONG",
		payload: name
	};
};
////////////////////////////////////////////////////////

export const getUsersAction = (headers, params) => {
	return dispatch => {
		axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
			dispatch({ type: "GET_USERS", payload: res.data });
		});
		// .catch(error => {
		// 	dispatch({ type: GET_USERS_ERROR, payload: error });
		// });
	};
};
//getUserBasedonIdAction
export const getUserBasedonIdAction = id => {
	return dispatch => {
		axios
			.get(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then(res => {
				dispatch({ type: "GET_USERS_BasedOnId", payload: res.data });
			});
		// console.log("UserBasedOnID === " ,res)

		// .catch(error => {
		// 	dispatch({ type: GET_USERS_ERROR, payload: error });
		// });
	};
};

// export const getUserdata = (headers, params) => {
// 	return dispatch => {
// 		axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
// 			dispatch({ type: "GET_USERS", payload: res.data });
// 		});
// 		// .catch(error => {
// 		// 	dispatch({ type: GET_USERS_ERROR, payload: error });
// 		// });
// 	};
// };

////////////////////////////////////////////////////////
// export const getDoorHealthDataAction = (headers, params) => {
// 	return dispatch => {
// 		getDoorHealthApi(headers, params)
// 			.then(data => {
// 				dispatch(DoorHealthApiActionSuccess(data));
// 			})
// 			.catch(error => {
// 				dispatch(DoorHealthApiActionError(error));
// 			});
// 	};
// };

// export const getDoorHealthApi = (headers, params) =>
// 	axios
// 		.get(urls["getDoorHealthApi"](), {
// 			headers,
// 			params
// 		})
//         .then();

// const DoorHealthApiActionSuccess = val => {
// 	return { type: GET_DOOR_HEALTH, payload: val };
// };

// const DoorHealthApiActionError = error => {
// 	return { type: GET_DOOR_HEALTH_ERROR, payload: error };
// };

///////////////////////////////////////////////////////////////////////////////////////////////////////////
