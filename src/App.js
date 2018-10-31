import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentAuthor: {},
      allAuthors: authors,
      filteredAuthors: authors
    };

    this.selectAuthor = this.selectAuthor.bind(this);
    this.resetAuthor = this.resetAuthor.bind(this);
    this.filterAuthors = this.filterAuthors.bind(this);
  }

  selectAuthor(author) {
    this.setState({ currentAuthor: author });
  }
  resetAuthor() {
    this.setState({
      currentAuthor: {},
      filteredAuthors: this.state.allAuthors
    });
  }
  filterAuthors(query) {
    let filter = this.state.allAuthors.filter(auth =>
      auth.first_name.toLowerCase().includes(query)
    );
    this.setState({ filteredAuthors: filter });
  }
  render() {
    const authorExist = () => {
      if (this.state.currentAuthor.first_name) {
        return <AuthorDetail auth={this.state.currentAuthor} />;
      } else {
        return (
          <AuthorsList
            authors={this.state.filteredAuthors}
            selectAuth={this.selectAuthor}
            filter={this.filterAuthors}
          />
        );
      }
    };
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar reset={this.resetAuthor} />
          </div>
          <div className="content col-10">{authorExist()}</div>
        </div>
      </div>
    );
  }
}

export default App;
