import React, { Component } from 'react';
import UserList from '../containers/user_list'
import UserDetails from '../containers/user_details'

export default class App extends Component {
  render() {
    return (
      <div>
      <div><UserList/></div>
      <div><UserDetails/></div>
      </div>
    );
  }
}
