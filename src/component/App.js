import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";



class App extends Component {
  constructor(props) {
    super();
    console.log("const")
    props.dispatch(getData());
  }


  render() {
    return (
      <div className="App">
        <div className="user__list">
          <ul>
              {this.props.users.arr.map((user, key) => (
                <li key={key}>
                  {user.name}<br/> {user.address.city}
                </li>
              ))}
            </ul>
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     lookUser: value => {
//       dispatch(selectUser(value));
//     }
//   };
// };

const mapStateToProps = state => {
  console.log("mapStateToProps")
  return {
    users: state.users.arr ? state.users : null
  };
};

export default connect(mapStateToProps)(App);
