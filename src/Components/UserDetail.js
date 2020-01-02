import React from "react";
import { connect } from "react-redux";
import { getUserBasedonIdAction } from "../Middleware/Actions";
//getUserBasedonIdAction

class Userdata extends React.Component {
	Userdatfunc = () => {
		this.props.getuserbasedonid(this.props.userid);
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
		getuserbasedonid: id => dispatch(getUserBasedonIdAction(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Userdata);
