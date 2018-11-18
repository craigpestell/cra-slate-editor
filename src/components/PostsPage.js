import React from 'react';
import { connect } from 'react-redux';
// import {loadPosts} from '../store/actions/PostAction';

class PostsPage extends React.Component {
  componentDidMount(props) {
    console.log('PostsPage onComponentDidMount props: ', props);
    // this.props.loadPosts();
  }

  render() {
    console.log('render PostsPage');
    return <div>this is from posts page</div>;
  }
}

const mapDispatchToProps = dispatch => ({
  loadPosts: () => {console.log('dispatching loadPosts')},
});

export default connect(undefined,mapDispatchToProps)(PostsPage);