import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProfileGithub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: "3f91500ad25b09522e57",
      clientSecret: "6f10e14c3b6326994eb35464bcd9f7b1e01e7936",
      count: 5,
      sort: "created:asc",
      repos: []
    };
  }

  componentDidMount = () => {
    const { username } = this.props;
    const { count, sort, clientId, clientSecret } = this.state;

    fetch(
      `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          repos: data
        });
        console.log(data, this.state.repos);
      })
      .catch(err => console.log(err));
  };

  render() {
    const { repos } = this.state;
    const repoItems = repos.map(repo => (
      <div key={repo.id} className="card card-body mb-2">
        <div className="row">
          <div className="col-md-6">
            <h4>
              <Link to={repo.html_url} className="text-info" target="_blank">
                {repo.name}
              </Link>
            </h4>
          </div>
          <div className="col-md-6">
            <span className="badge badge-info mr-1">
              Stars: {repo.stargazers_count}
            </span>
            <span className="badge badge-secondery mr-1">
              Watchers: {repo.watchers_count}
            </span>
            <span className="badge badge-info mr-1">
              Forks: {repo.forks_count}
            </span>
          </div>
        </div>
      </div>
    ));
    return (
      <div>
        <hr />
        <h3 className="mb-4">Latest Github Repos</h3>
        {repoItems}
      </div>
    );
  }
}

export default ProfileGithub;
