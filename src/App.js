import React from "react";
import "./App.css";
import axios from "axios";
class App extends React.Component {
	state = {
		data: "Hardik"
	};
	componentDidMount() {
		axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
			this.setState({
				data: res.data.length
			});
			console.log(res);
		});
	}
	render() {
		let array = [1, 2, 3, 4, 5];
		console.log(array);
		var newarray = array[6];
		console.log(newarray);
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
						<div className="body-Image-div"></div>
						<div className="body-midcontent-div"> </div>
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
export default App;

//ROuter

// you put in url "/HArdik"  and you have  "/" = component01 "/Hardik" = component02 react - router(RR) performs
// "/HArdik" contains "/" yes show it "/HArdik" contains "/HArdik" show it if (Exact is not mentioned)
// if exact is menntioned it performs "/HArdik" === "/" no dont show and so  onabort

// Never Use  <a>></a> tag while using react router our html file loads again all data lost
// instead use <Link to = ""></Link>
