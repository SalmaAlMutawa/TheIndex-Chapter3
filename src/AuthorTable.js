import React, { Component } from "react";

// Components
import AuthorCard from "./AuthorCard";

class AuthorTable extends Component {
  render() {
    return (
      <tbody>
        <tr>
          <td>{this.props.book.title}</td>
          <td>
            {this.props.auth.first_name} {this.props.auth.last_name}
          </td>
          <td>{this.props.book.color}</td>
        </tr>
      </tbody>
    );
  }
}

export default AuthorTable;
