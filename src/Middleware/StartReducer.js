const initialState = {
	songname: "no-song"
};
const Appreducer = (state = initialState, action) => {
	const newState = { ...state };
	switch (action.type) {
		case "DISPLAY_SONG":
			newState.songname = action.payload;
			break;
		default:
			break;
	}
	return newState;
};

export default Appreducer;
