// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
// import Header from './common/Header';
// import {connect} from 'react-redux';
import Header from './common/Header';

class App extends React.Component {
  render() {
    console.log(this.props.children);
    return (
      <div className="container-fluid">
       <Header/>
       {this.props.children}
     </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

// function mapStateToProps(state, ownProps) {
//   return {
//     loading: state.ajaxCallsInProgress > 0
//   };
// }

export default App;
