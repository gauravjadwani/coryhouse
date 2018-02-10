import React, {PropTypes} from 'react';
// import { bindActionCreators } from 'redux';
// import {connect} from 'react-redux';
// import {browserHistory} from 'react-router';
// import * as courseActions from '../../actions/courseActions';
// import CourseList from './CourseList';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: {
        title: ""
      }
    };
  }

  onTitleChange(event) {
    console.log('event',event);
    // const course = this.state.course;
    // course.title = event.target.value;
    // this.setState({course: course});
  }
  onClickSave() {
    alert(`Saving ${this.state.course.title}`);
  }
  render() {
    console.log(this.state,'q');
    return (<div>
      <h1>Courses</h1>
      <h2>Add Courses</h2>
      <input type="text" onChange={this.onTitleChange}/>
      <input type="submit" value="Save" onClick={this.onClickSave}/>
    </div>);
  }
}
//
// CoursesPage.propTypes = {
//   actions: PropTypes.object.isRequired,
//   courses: PropTypes.array.isRequired
// };

// function mapStateToProps(state, ownProps) {
//   return {
//     courses: state.courses
//   };
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(courseActions, dispatch)
//   };
// }
export default CoursesPage;
// export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
