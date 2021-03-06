import React, { Component } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteExperience } from "../../actions/profileActions";

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  onDeleteClick(id) {
    this.props.deleteExperience(id);
  }

  render() {
    const experience = this.props.experience.map(exp => (
      <tr key={exp.id}>
        <td>{exp.company}</td>
        <td>{exp.title}</td>
        <td>
          {/* <Moment format="YYYY/MM/DD"> {exp.from} </Moment> -{" "}
          <Moment format="YYYY/MM/DD"> {exp.to} </Moment>{" "} */}
          {exp.from} - {exp.to}
        </td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, exp._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4 className="mb-4">Experience Credentials</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Title</th>
              <th>Years</th>
            </tr>
            {experience}
          </thead>
        </table>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteExperience }
)(Experience);
