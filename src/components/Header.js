import React, { Component } from 'react';
import styles from './Header.css';

class Header extends Component {
  state = {
    header: 'big'
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    let scrollLocation = window.pageYOffset;
    if(scrollLocation > 100 && this.state.header === 'big') {
      this.setState({
        header: 'small'
      });
    }
    if(scrollLocation <= 100 && this.state.header === 'small') {
      this.setState({
        header: 'big'
      });
    }
  }
  
  render() {
    let headerStyle;
    let brandStyle;

    if(this.state.header === 'big') {
      headerStyle = {
        height: '20vh',
      };
      brandStyle = {
        fontSize: '3em'
      };
    }

    if(this.state.header === 'small') {
      headerStyle = {
        height: '15vh',
      };
      brandStyle = {
        fontSize: '2em'
      };
    }

    return (
      <header style={headerStyle} className={styles.Header}>
        <p style={brandStyle} className={styles.name}>Will Martin Trombone</p>
        <ul>
          <li><a href="#Intro">Intro</a></li>
          <li><a href="#Music">Music</a></li>
          <li><a href="#Lessons">Lessons</a></li>
          <li><a href="#Bio">Bio</a></li>
          <li><a href="#Links">Links</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </header>
    );
  }
}

export default Header;
