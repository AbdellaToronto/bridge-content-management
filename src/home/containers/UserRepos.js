import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import Repo from '../components/Repo';
import {
	doUserRepos
} from '../actions/doUserRepos';
import { bindActionCreators } from 'redux'

class UserRepos extends Component {

	componentDidMount() {
		let username = 'mohandere';
		this.props.doUserRepos(username);
	}

	render() {
		let { repos } = this.props;
		if (_.isEmpty(repos)) {
			return null;
		}

		return (
			<div>
				<h3>Github Projects</h3>
				<ul className="repos">{repos.map((repo, i) => <Repo key={i} {...repo} />)}</ul>
			</div>
		);
	}
}

UserRepos.propTypes = {
	repos: PropTypes.array
};

const mapStateToProps = state => {
	return {
		repos: state.home.userRepos.repos
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		doUserRepos
	}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRepos);
