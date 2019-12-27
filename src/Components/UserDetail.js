import React from "react";
import { connect } from "react-redux";

class Userdata extends React.Component {
	Userdatfunc = () => {
		return <div>{this.props.userid}</div>;
	};
	render() {
		{
			return this.Userdatfunc();
		}
	}
}

const mapStateToProps = state => {
	return {};
};
const mapDispatchToProps = dispatch => {
	return {
		//getUsersAction
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Userdata);
