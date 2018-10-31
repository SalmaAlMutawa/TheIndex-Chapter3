import React, { Component } from "react";

// Components
import AuthorTable from "./AuthorTable";

class AuthorDetail extends Component {
  render() {
    console.log(this.props.auth);
    const bookRow = this.props.auth.books.map(book => (
      <AuthorTable auth={this.props.auth} key={book.title} book={book} />
    ));
    return (
      <div className="author col-xs-10">
        <div>
          <h3>
            {this.props.auth.first_name} {this.props.auth.last_name}
          </h3>
          <img src={this.props.auth.imageUrl} className="img-thumbnail" />
        </div>
        <table className="mt-3 table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Authors</th>
              <th>Color</th>
            </tr>
          </thead>
          {bookRow}
        </table>
      </div>
    );
  }
}

export default AuthorDetail;
