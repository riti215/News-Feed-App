import React, { Component } from "react";
import "./Main.css";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    const app_key = "273850e5347b4af0ae7c082f104ea3f8";
    const home_url = `http://newsapi.org/v2/top-headlines?country=in&apiKey=${app_key}`;
    fetch(home_url)
      .then((response) => response.json())
      .then((myJson) => {
        this.setState({
          articles: myJson.articles,
        });
      });
  }

  render() {
    console.log(this.state);
    const currTime = new Date().toLocaleString();
    return (
      <div>
        <div id="topic">
        <div>◀ Top Stories ▶</div>
        <div id="time">Last updated: {currTime}</div>
        </div>
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
      </div>
    );
  }
}

export default Home;
