import React, { Component } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteEducation } from "../../actions/profileActions";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  onDeleteClick(id) {
    this.props.deleteEducation(id);
  }

  render() {
    const education = this.props.education.map(edu => (
      <tr key={edu.id}>
        <td>{edu.school}</td>
        <td>{edu.degree}</td>
        <td>
          {/* <Moment format="YYYY/MM/DD"> {exp.from} </Moment> -{" "}
          <Moment format="YYYY/MM/DD"> {exp.to} </Moment>{" "} */}
          {edu.from} - {edu.to}
        </td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, edu._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4 className="mb-4">Education Credentials</h4>
        <table className="table">
          <thead>
            <tr>
              <th>School</th>
              <th>Degree</th>
              <th>Years</th>
            </tr>
            {education}
          </thead>
        </table>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteEducation }
)(Education);
