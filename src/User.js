import React from "react";
import "./User.css";
class User extends React.Component {
  state = {
    loading: true,
    person: null
  };

  
  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });

  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.person ? (
          <div>loading...</div>
        ) : (
          <div>
            <img src={this.state.person.picture.large} alt="profile" />
            <div className="name">
              {this.state.person.name.first + " " + this.state.person.name.last}
            </div>
            <div className="location">
              {" "}
              {this.state.person.location.city +
                " , " +
                this.state.person.location.country}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default User;
