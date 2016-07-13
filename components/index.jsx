import React from 'react';
import ReactDOM from 'react-dom';

import 'whatwg-fetch';
import moment from 'moment';

import 'normalize.css'
import '../sass/index.scss';

export class Index extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      "url": "https://farm8.staticflickr.com/7331/27741386690_71426ab901_h.jpg",
      "title": "Emerson Rose Gelinas",
      "dateString": "July 1st 2016"
    };
  }

  render() {
    return (
      <div className="view-index" style={{backgroundImage: this.state.url}}>
        <h1 className="view-index__heading">{this.state.title}</h1>
        <p className="view-index__copy">Born {this.state.dateString}</p>
      </div>
    );
  }

}

if(typeof document !== "undefined") {
  ReactDOM.render(<Index />, document.querySelector(".emmy-site"));
}
