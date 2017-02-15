
/* eslint no-return-assign: off */
/* eslint react/prop-types: off */

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';
import { scaleDown as Menu } from 'react-burger-menu';
import Modal from 'boron/OutlineModal';

require('es6-promise').polyfill();
require('isomorphic-fetch');

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.menuOpen = false;
  }

  showModal() {
    this.modal.show();
  }

  hideModal() {
    this.modal.hide();
  }

  render() {
    const outerContainerId = 'react-container';
    const pageWrapId = 'content';

    const buttonStyle = {
      margin: '1em auto',
      padding: '.5em 1em',
      outline: 'none',
      fontSize: '16px',
      fontWeight: '600',
      background: '#c94e50',
      color: '#FFFFFF',
      border: 'none',
      cursor: 'pointer',
    };

    const modalContentStyle = {
      margin: '0',
      color: '#444',
      fontWeight: '400',
      fontSize: '2rem',
      paddingTop: '20px',
    };

    const child = this.props.children;

    const menuHeaderStyle = {
      margin: '0 auto',
      padding: '0em 0em 1em .75em',
      color: 'rgba(0, 0, 0, 0.4)',
      boxShadow: 'inset 0 -1px rgba(0, 0, 0, 0.2)',
      display: 'block',
      outline: 'none',
    };

    return (
      <div id="app">
        <Menu id="menu" outerContainerId={outerContainerId} pageWrapId={pageWrapId}>
          <h2 style={menuHeaderStyle}><span style={{ fontSize: '1.5em', color: '#ccc' }}>Sidebar</span></h2>
          <a key="home" className="menu-item" href="/">Home</a>
          <a key="about" className="menu-item" href="/about">About</a>
          <a key="contact" className="menu-item" href="/contact">Contact</a>
        </Menu>
        <main id="content" style={{ textAlign: 'center' }}>
          <div style={{ minWidth: '300px', maxWidth: '600px' }}>
            <h1>hello-world</h1>
            <button onClick={this.showModal} style={buttonStyle}>Open Modal</button>
            <Modal id="modal'" ref={modal => this.modal = modal} modalStyle={{ top: '30%' }}>
              <h2 style={modalContentStyle}><strong>I am</strong> a dialog</h2>
              <button onClick={this.hideModal} style={buttonStyle}>Close</button>
            </Modal>
            { child.type.name === 'Connect' ? null : child }
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => (bindActionCreators({

}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(App);
