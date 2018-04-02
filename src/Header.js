import React, { Component} from 'react';
import { PropTypes } from 'prop-types';

class Header extends Component {


  static propTypes = {
      items:PropTypes.array.isRequired
  };

  render() {
    console.log('items',this.props.items);
    return (
        <div>
            {
                this.props.items.map((item,index)=>{
                    return <a href={item.link} key={index}>{item.label}</a>
                })
            }
        </div>
        /*
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      */
    );
  }
}

export default Header;
