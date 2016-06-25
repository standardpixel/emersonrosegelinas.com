import React from 'react';
import ReactDOM from 'react-dom';

import 'whatwg-fetch';
import moment from 'moment';

import 'normalize.css'
import '../sass/index.scss';

const flickrKey = "43000fd93cbd5354fe5e954b26f82d84";
const flickrUser = "14646162%40N03";
const flickrMethod = "flickr.people.getPhotos";
const flickrExtras = "date_taken, tags"
const url = `https://api.flickr.com/services/rest/?method=${flickrMethod}&api_key=${flickrKey}&user_id=${flickrUser}&extras=${flickrExtras}&format=json&nojsoncallback=1`;

export class Index extends React.Component {

  constructor(props) {

    super(props);

    this.state = {};
  }

  componentDidMount() {
    let container = ReactDOM.findDOMNode(this);
    let photo;
    let that = this;

    fetch(url).then(function(response) {
      return response.json();
    }).then(function(json) {
      photo = json.photos.photo[0];
      photo.url = `url(https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_h.jpg)`;
      that.setState(photo);
    });
  }

  render() {
    return (
      <div className="view-index" style={{backgroundImage: this.state.url}}>
        <h1 className="view-index__heading">{this.state.title}</h1>
        <p className="view-index__copy">Born {moment(this.state.datetaken).format("MMMM Do YYYY")}</p>
      </div>
    );
  }

}

if(typeof document !== "undefined") {
  ReactDOM.render(<Index />, document.querySelector(".emmy-site"));
}
