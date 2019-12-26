const initialstate = {
	duration: "12:09867555"
};
const ExtraReducer = (state = initialstate, action) => {
	const newState = { ...state };
	switch (action.type) {
		case "DURATION":
			newState.duration = "909099090:9090990909";
			break;
		default:
			break;
	}
	return newState;
};

export default ExtraReducer;
