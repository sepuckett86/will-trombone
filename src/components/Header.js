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
        height: '30vh',
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
          <li><a href="#intro">Intro</a></li>
          <li><a href="#music">Music</a></li>
          <li><a href="#lessons">Lessons</a></li>
          <li><a href="#bio">Bio</a></li>
          <li><a href="#links">Links</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </header>
    );
  }
}

export default Header;
