import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title, discription, imageUrl, newsUrl, author, date} = this.props;
    return (
      <div className="my-3">
        <div className="card" >
          <img src={!imageUrl?"https://hdqwalls.com/the-defeated-batman-5k-wallpaper.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{discription}</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()} </small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
