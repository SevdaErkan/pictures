import { Component } from "react";
import unSplash from "./api/unSplash";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import "./styles.css";

class App extends Component {
  state = {
    images: []
  };
  formSubmit = async (term) => {
    const response = await unSplash.get("/search/photos", {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.formSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;
