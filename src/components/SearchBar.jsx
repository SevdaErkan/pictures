import { Component } from "react";
import "./searchBar.css";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }
  formSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <div className="container" style={{ margin: "10px" }}>
        <form onSubmit={this.formSubmit}>
          <input
            placeholder="Image Search…"
            type="text"
            value={this.state.value}
            onChange={(e) => this.handleChange(e)}
          />
        </form>
      </div>
    );
  }
}
export default SearchBar;
