import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { DisplaySong } from "./Middleware/Actions";

class App extends React.Component {
	state = {
		data: "Hardik",
		song: ""
	};
	componentDidMount() {
		console.log("Component did mount called");
		this.props.getSongName("JA-JA-JA");
	}
	componentDidUpdate(prevProps, prevState) {
		console.log(
			"Updation >>> ",
			"prevProps >>>",
			prevProps.songname,
			"prevState >>>",
			prevState,
			"this.props >>>>",
			this.props.songname
		);
		if (prevProps.songname !== this.props.songname) {
			this.setState({
				song: this.props.songname
			});
		}
	}

	render() {
		console.log("Render Called", this.props.songname, "state", this.state);
		return (
			<div>
				<div className="Header">
					<div className="container">
						<div className="HeaderTitle">
							<h1>Living the simple life</h1>
							<p>A blog exploring minimalism in life</p>
						</div>
						<nav>
							<ul>
								<li>Home</li>
								<li>About Me</li>
								<li>Recent Post</li>
							</ul>
						</nav>
					</div>
				</div>
				<div className="BodyContainer">
					<div className="BodyContainer-main">
						<div className="body-Image-div">
							<button>Invoke Action</button>
						</div>
						<div className="body-midcontent-div">
							{this.props.songname}
						</div>
						<div className="body-midcontent-div"></div>
					</div>
					<div className="side-Container">
						<div className="sidecontainer-div"></div>
						<div className="sidecontainer-div"></div>
					</div>
				</div>
				<div className="footer"></div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log("state", state);
	return {
		songname: state.StartReducer.songname
	};
};
const mapDispatchToProps = dispatch => {
	return {
		getSongName: song => dispatch(DisplaySong(song))
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

//ROuter

// you put in url "/HArdik"  and you have  "/" = component01 "/Hardik" = component02 react - router(RR) performs
// "/HArdik" contains "/" yes show it "/HArdik" contains "/HArdik" show it if (Exact is not mentioned)
// if exact is menntioned it performs "/HArdik" === "/" no dont show and so  onabort

// Never Use  <a>></a> tag while using react router our html file loads again all data lost
// instead use <Link to = ""></Link>
