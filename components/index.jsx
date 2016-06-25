import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css'
import '../sass/index.scss';

export class Index extends React.Component {

  constructor(props) {

    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="view-index">

      </div>
    );
  }

}

if(typeof document !== "undefined") {
  ReactDOM.render(<Index />, document.querySelector(".emmy-site"));
}
