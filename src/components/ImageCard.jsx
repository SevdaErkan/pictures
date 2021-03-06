import React, { Component } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0
    };
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 150);
    this.setState({ spans });
  };

  render() {
    // console.log(this.props)
    const { urls, description, id } = this.props;
    return (
      <div className="imageWrapper" key={id}>
        <img ref={this.imageRef} src={urls.thumb} alt={description} />
      </div>
    );
  }
}
export default ImageCard;

//style={{gridRowEnd:`span ${this.state.spans}`}
