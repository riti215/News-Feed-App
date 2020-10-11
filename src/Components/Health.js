import React, { Component } from "react";

class Health extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    const app_key = "273850e5347b4af0ae7c082f104ea3f8";
    const health_url = `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${app_key}`;
    fetch(health_url)
      .then((response) => response.json())
      .then((myJson) => {
        this.setState({
          articles: myJson.articles,
        });
      });
  }

  render() {
    console.log(this.state);
    return (
      <div className="container">
        {this.state.articles.map((item) => {
          return (
            <div className="card">
              <div className="card-image">
                <img src={item.urlToImage} alt="not available" />
              </div>
              <div className="card-text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  ..Read more
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Health;
