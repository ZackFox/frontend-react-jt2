import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfile } from "../actions/profileActions";
import NotFound from "./NotFound";

class Profile extends Component {
  componentDidMount() {
    const id = this.props.user.id;
    this.props.getProfile(id);
  }

  render() {
    const { profile, isFetching } = this.props;
    if (isFetching) {
      return <div>Загрузка...</div>;
    }

    if (!profile) {
      return <NotFound />;
    }

    return (
      <div className="container">
        <p>
          <strong>Город: </strong>
          {profile.city}
        </p>

        <strong> Знание языков: </strong>
        <ul>{profile.languages.map(item => <li key={item}> {item} </li>)}</ul>

        <strong>Ссылки: </strong>
        <ul>
          {profile.social.map(item => (
            <li key={item.label}>
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Profile.proptypes = {
  profile: PropTypes.shape().isRequired,
  isFetching: PropTypes.bool.isRequired,
  getProfile: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profileReducer.profile,
  isFetching: state.profileReducer.isFetching,
});

export default connect(mapStateToProps, { getProfile })(Profile);