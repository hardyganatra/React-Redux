import React from "react";
import { connect } from "react-redux";
// import { getUserBasedonIdAction } from "../Middleware/Actions";
//getUserBasedonIdAction

class Userdata extends React.Component {
	componentDidMount() {
		//this.props.getuserbasedonid(this.props.userid)
	}

	Userdatfunc = () => {
		const user = this.props.getUsersBasedonID.find(
			user => user.id === this.props.userid
		);
		if (user) {
			return <div>{user.name}</div>;
		} else return <div>...loading</div>;
	};
	render() {
		{
			return this.Userdatfunc();
		}
	}
}

const mapStateToProps = state => {
	return {
		getUsersBasedonID: state.ExtraReducer.userArray
	};
};
const mapDispatchToProps = dispatch => {
	return {
		// getuserbasedonid: id => dispatch(getUserBasedonIdAction(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Userdata);
