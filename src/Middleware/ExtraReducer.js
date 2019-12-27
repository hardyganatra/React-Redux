const initialstate = {
	duration: "12:09867555",
	songe: ["song-01", "song-02", "song-03"],
	users: []
};
const ExtraReducer = (state = initialstate, action) => {
	const newState = { ...state };
	switch (action.type) {
		case "DURATION":
			newState.duration = "909099090:9090990909";
			break;
		case "GET_USERS":
			console.log("Thunk", action.payload);
			newState.users = action.payload;
			break;
		default:
			break;
	}
	return newState;
};

export default ExtraReducer;
