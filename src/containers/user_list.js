import React, { Component } from "react";
import { connect } from "react-redux";
import { selectUser } from "../actions/index";
import { bindActionCreators } from "redux";

class UserList extends Component {
  render() {
    return (
      <div>
        <ul className="col-md-4">
          {this.props.usersPassedToProps.map(aLineFromTheReducer => {
            return (
              <li
                className="list-group-item"
                key={aLineFromTheReducer.id}
                onClick={() => this.props.selectUser(aLineFromTheReducer)}
              >
                {aLineFromTheReducer.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    usersPassedToProps: state.usersFromReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectUser: selectUser }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
